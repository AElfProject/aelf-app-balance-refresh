// Stake
const transferredInsert = {
  TransactionId: 'f2201c9396aec80dce049de8435ca41b4d849f3d29b897231eb248ec12886b7f',
  Status: 'MINED',
  Logs: [
    {
      Address: '7RzVGiuVWkvL4VfVHdZfQF2Tri3sgLe9U991bohHFfSRZXuGX',
      Name: 'TransactionFeeCharged',
      Indexed: [],
      NonIndexed: 'CgNFTEYQwIvzCQ=='
    },
    {
      Address: '7RzVGiuVWkvL4VfVHdZfQF2Tri3sgLe9U991bohHFfSRZXuGX',
      Name: 'Transferred',
      Indexed: [Array],
      NonIndexed: 'IIDC1y8='
    }
  ],
  Bloom: 'AAAAAAAAAAAAAAAAAAAAAAAIAIQAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAAAAAAAAAAAAAAAAAAAAIAAAAAAAAAIAAAAAAAAAAAAAAAAAAAAEAAAAQAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAAAAAAAAAAABAIAAAAAAAAAAAAAAAAAAAQAAAAAAAAAABAAAAAoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA==',
  BlockNumber: 17020609,
  BlockHash: '2b362190bd4860420581d73a790a2b13ce9b741bf42f56d64b06ca18a541baa6',
  Transaction: {
    From: '2RCLmZQ2291xDwSbDEJR6nLhFJcMkyfrVTq1i1YxWC4SdY49a6',
    To: '2F5McxHg7fAqVjDX97v79j4drsMq442rArChpBii8TWuRb8ZnK',
    RefBlockNumber: 17020606,
    RefBlockPrefix: 'HyH4xQ==',
    MethodName: 'Stake',
    Params: '"100000000"',
    Signature: 'AgKbk7oWTueQGzUdfHYX1p9smwuPi9CgK2kDz8N1ZdBwuSNvMZ186Kqp+N2+ROb14TjFlfPSs1zAdcCS1nQPOQA='
  },
  ReturnValue: '',
  Error: null,
  TransactionSize: 166,
  scanTags: [ 'TOKEN_TRANSFERRED' ],
  time: '2021-01-26T04:06:20.2739237Z'
}
const formattedData = [
  {
    from: '2RCLmZQ2291xDwSbDEJR6nLhFJcMkyfrVTq1i1YxWC4SdY49a6',
    to: '2F5McxHg7fAqVjDX97v79j4drsMq442rArChpBii8TWuRb8ZnK',
    symbol: 'LOT',
    amount: -1,
    isCrossChain: 'no',
    action: 'Transferred',
    relatedChainId: 'tDVV',
    txId: 'f2201c9396aec80dce049de8435ca41b4d849f3d29b897231eb248ec12886b7f'
  }
]

// CrossChainReceived
const transferredInsert = {
  TransactionId: 'ff2c65b59be413694108051e9fa99ac621a5aaa6bd642a6fe1f8f99a9cb0d261',
  Status: 'MINED',
  Logs: [
    {
      Address: '7RzVGiuVWkvL4VfVHdZfQF2Tri3sgLe9U991bohHFfSRZXuGX',
      Name: 'CrossChainReceived',
      Indexed: [],
      NonIndexed: 'CiIKILqij/7FfBNccBWojUreRp7BKNXmjp0t34YSH5gh3JgqEiIKILqij/7FfBNccBWojUreRp7BKNXmjp0t34YSH5gh3JgqGgNFTEYggNiO4W8wm/ThBDib9OEEQKOS8Ac='
    }
  ],
  Bloom: 'AAAACAAAAAAAAAAAAAEAAAAAAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAIAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA==',
  BlockNumber: 16566016,
  BlockHash: '77dfadce234620cd13230490607d2ba2bf1aa041f43cd978a1db46365037806f',
  Transaction: {
    From: '2RCLmZQ2291xDwSbDEJR6nLhFJcMkyfrVTq1i1YxWC4SdY49a6',
    To: '7RzVGiuVWkvL4VfVHdZfQF2Tri3sgLe9U991bohHFfSRZXuGX',
    RefBlockNumber: 16566014,
    RefBlockPrefix: 'wK1cJg==',
    MethodName: 'CrossChainReceiveToken',
    Params: '{ "fromChainId": 9992731, "parentChainHeight": "16517411", "transferTransactionBytes": "CiIKILqij/7FfBNccBWojUreRp7BKNXmjp0t34YSH5gh3JgqEiIKICeR6ZKlfyjnWhHxOvLArsiw6zXS8EjULrqJAckuA3jcGJ+S8AciBCoCh1YqEkNyb3NzQ2hhaW5UcmFuc2ZlcjI4CiIKILqij/7FfBNccBWojUreRp7BKNXmjp0t34YSH5gh3JgqEgNFTEYYgNiO4W8omPVxMJv04QSC8QRBAra0KAafZ+Bw1860tB5i9b+Zjwq1nEoEr0xUzVWSWvEF6CRn/HlZpM2SKKS/y8Ke4ZzdcAWEqLcAA7C3fbM3VQA=", "merklePath": { "merklePathNodes": [ { "hash": "97ee8f7e03ae107900fabf7fa96727b0bcda308761f2b5155968065f5072366e" }, { "hash": "eee2cf92de2be46fd14727d438510162047b3b0aa86e684c6ccbbedeca6e72e5", "isLeftChildNode": true } ] } }',
    Signature: 'eBnmr6rGsALQaC+Z7l+I/IxnIDvhtCSsWMT4YjO0lqRJMbU4Q+/PNdxrAxZGgPmsnl0t1XHQ+1ddB4XZcXiOTwE='
  },
  ReturnValue: '',
  Error: null,
  TransactionSize: 504,
  scanTags: [ 'TOKEN_SUPPLY_CHANGED', 'TOKEN_TRANSFERRED' ],
  time: '2021-01-23T11:37:28.142323Z'
}
const formattedData = [
  {
    from: '2RCLmZQ2291xDwSbDEJR6nLhFJcMkyfrVTq1i1YxWC4SdY49a6',
    to: '2RCLmZQ2291xDwSbDEJR6nLhFJcMkyfrVTq1i1YxWC4SdY49a6',
    symbol: 'ELF',
    amount: -1,
    memo: undefined,
    isCrossChain: 'Receive',
    action: 'CrossChainReceived',
    relatedChainId: 'AELF',
    txId: 'ff2c65b59be413694108051e9fa99ac621a5aaa6bd642a6fe1f8f99a9cb0d261'
  }
]


// CrossChainTransferred
const transferredInsert = {
  TransactionId: '560f44f346b23eb455fb43b37f8ae1ef28636c5a1fc3a9aed3c55f475c82d0aa',
  Status: 'MINED',
  Logs: [
    {
      Address: '7RzVGiuVWkvL4VfVHdZfQF2Tri3sgLe9U991bohHFfSRZXuGX',
      Name: 'TransactionFeeCharged',
      Indexed: [],
      NonIndexed: 'CgNFTEYQ0NnkDg=='
    },
    {
      Address: '7RzVGiuVWkvL4VfVHdZfQF2Tri3sgLe9U991bohHFfSRZXuGX',
      Name: 'Burned',
      Indexed: [Array],
      NonIndexed: 'GAE='
    },
    {
      Address: '7RzVGiuVWkvL4VfVHdZfQF2Tri3sgLe9U991bohHFfSRZXuGX',
      Name: 'CrossChainTransferred',
      Indexed: [],
      NonIndexed: 'CiIKILqij/7FfBNccBWojUreRp7BKNXmjp0t34YSH5gh3JgqEiIKIOC0Ddw1INC1NjvZd1AU135Lj+gylG0OOCVzHYkSe4E6GgNFTEYgASoTdG8gYmUgb3Igbm90IHRvIGJlLjCb9OEEOJv04QQ='
    }
  ],
  Bloom: 'AAAAAAAAAAAAAAAAAAAAAAAAAIAAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAIAAAAAAAEAAAAAAAAAAAAEAAAAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgQEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgACAAAAAAAAAAAAAAAAAAAAAAAAAIAAAAAAAAAAABAIAAAAAAAAQAAAAAAAAAAAAAAAAAAAAABAAAAAAAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA==',
  BlockNumber: 11831355,
  BlockHash: 'd8ac178a3d0fa8a6aeae654bc962b0c12cc5f3bc873d6859180dbf87940eadde',
  Transaction: {
    From: '2RCLmZQ2291xDwSbDEJR6nLhFJcMkyfrVTq1i1YxWC4SdY49a6',
    To: '7RzVGiuVWkvL4VfVHdZfQF2Tri3sgLe9U991bohHFfSRZXuGX',
    RefBlockNumber: 11831353,
    RefBlockPrefix: 'GUV/FA==',
    MethodName: 'CrossChainTransfer',
    Params: '{ "to": "2hxkDg6Pd2d4yU1A16PTZVMMrEDYEPR8oQojMDwWdax5LsBaxX", "symbol": "ELF", "amount": "1", "memo": "to be or not to be.", "toChainId": 9992731, "issueChainId": 9992731 }',
    Signature: 'mzROvK4Thp10ub+L5XMVekn6WLtu5P4OpGcCx3r1xjNjMF+p65CxK0KDCxJpEE5XGcpyAW/kTuzvgBm2yJd+WAE='
  },
  ReturnValue: '',
  Error: null,
  TransactionSize: 248,
  scanTags: [ 'TOKEN_SUPPLY_CHANGED', 'TOKEN_TRANSFERRED' ],
  time: '2020-12-26T10:26:32.1928706Z'
};
const formattedData = [
  {
    from: '2RCLmZQ2291xDwSbDEJR6nLhFJcMkyfrVTq1i1YxWC4SdY49a6',
    to: '2hxkDg6Pd2d4yU1A16PTZVMMrEDYEPR8oQojMDwWdax5LsBaxX',
    symbol: 'ELF',
    amount: -1,
    memo: 'to be or not to be.',
    isCrossChain: 'Transfer',
    action: 'CrossChainTransferred',
    relatedChainId: 'AELF',
    txId: '560f44f346b23eb455fb43b37f8ae1ef28636c5a1fc3a9aed3c55f475c82d0aa'
  }
]