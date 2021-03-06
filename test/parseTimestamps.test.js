const test = require('ava')
const parseTimestamps = require('../lib/parseTimestamps')

test('parseTimestamps', t => {
  const check = (val, expected) => {
    t.deepEqual(parseTimestamps(val), expected)
  }

  check('00:00:20,000 --> 00:00:24,400', {
    start: 20000,
    end: 24400
  })

  check('00:00:00,000 --> 00:00:01,000', {
    start: 0,
    end: 1000
  })

  check('00:01:00,500 --> 00:01:10,800', {
    start: 60500,
    end: 70800
  })

  check('12:34:56,789 --> 98:76:54,321', {
    start: 45296789,
    end: 357414321
  })
})
