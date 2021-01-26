/**
 * @file account formatter
 */
const Decimal = require('decimal.js');
const lodash = require('lodash');
const {
  Balance
} = require('viewer-orm/model/balance');
const {
  Transfer
} = require('viewer-orm/model/transfer');
const {
  Tokens
} = require('viewer-orm/model/tokens');
const {
  sequelize
} = require('viewer-orm/common/viewer');
const {
  QUERY_TYPE
} = require('aelf-block-scan');
const {
  deserializeLogs
} = require('../utils');
const {
  TOKEN_BALANCE_CHANGED_EVENT,
  TOKEN_TRANSFERRED_EVENT,
  TOKEN_SUPPLY_CHANGED_EVENT
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
    const {
      amount,
      symbol
    } = item;
    return {
      ...item,
      amount: -1,
      txId: TransactionId
    };
  }));
}

// function transferredInserter(formattedData) {
//   return sequelize.transaction(t => Transfer.bulkCreate(formattedData, {
//     transaction: t
//   }));
// }

async function transferredInsert(transaction, type) {
  console.log('transferredInsert: ', transaction, type);
  const formattedData = await transferredFormatter(transaction, type);

  console.log('formattedData: ', formattedData);
  return true;
  // return transferredInserter(formattedData);
}

module.exports = {
  transferredInsert
};
