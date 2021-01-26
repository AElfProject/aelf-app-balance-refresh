/**
 * @file account formatter
 */

const axios = require('axios');

const {
  deserializeLogs
} = require('../utils');
const {
  TOKEN_TRANSFERRED_EVENT,
} = require('../config/constants');
const config = require('../config');

function deserializeTransferredLogs(transaction, filters) {
  const {
    Logs = []
  } = transaction;
  return Promise.all(
    filters
      .map(f => {
        const {
          formatter,
          filterText
        } = f;
        return deserializeLogs(Logs, filterText)
          .then(res => res.map(r => formatter(r.deserializeLogResult, transaction)));
      })
  );
}

async function transferredFormatter(transaction) {
  const {
    TransactionId
  } = transaction;
  let transferInfo = await deserializeTransferredLogs(transaction, TOKEN_TRANSFERRED_EVENT);
  transferInfo = transferInfo.reduce((acc, v) => [...acc, ...v], []);
  return Promise.all(transferInfo.map(async item => {
    return {
      ...item,
      amount: -1,
      txId: TransactionId
    };
  }));
}

function requestFrefreshBalance(txs, feeSymbol = '') {
  axios({
    method: 'post',
    url: config.refreshBalance.remoteApi, // 'https://wallet-app-api-test.aelf.io/app/elf/cache_balance',
    data: {
      device: 'iOS',
      udid: '1',
      version: '3.7',
      test: '1',
      from: JSON.stringify({
        address: txs.from, // '2RCLmZQ2291xDwSbDEJR6nLhFJcMkyfrVTq1i1YxWC4SdY49a6',
        chainid: config.refreshBalance.currentChain, // 'tDVV',
        symbol: feeSymbol || txs.symbol, // 'LOT'
      }),
      to: JSON.stringify({
        address: txs.to, // '2RCLmZQ2291xDwSbDEJR6nLhFJcMkyfrVTq1i1YxWC4SdY49a6',
        chainid: config.refreshBalance.currentChain, // 'tDVV',
        symbol: feeSymbol || txs.symbol, // 'LOT'
      }),
      chain_id: config.refreshBalance.currentChain // 'tDVV'
    }
  }).then(() => {
    console.log('update cache done', feeSymbol || txs.symbol);
  }).catch(error => {
    console.log('update cache error:', error, 'api: ', config.refreshBalance.remoteApi);
  });
}

async function transferredInsert(transaction, type) {
  // console.log('transferredInsert: ', transaction, type);
  const formattedData = await transferredFormatter(transaction, type);
  // console.log('formattedData: ', formattedData);

  if (!formattedData.length) {
    return;
  }

  formattedData.forEach(txs => {
    requestFrefreshBalance(txs);
    if (txs.symbol !== config.refreshBalance.feeToken) {
      requestFrefreshBalance(txs, config.refreshBalance.feeToken);
    }
  });
}

module.exports = {
  transferredInsert
};
