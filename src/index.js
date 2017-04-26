'use strict'

const request = require('request')

function subscribe(uri, options, cb) {
  if (typeof options === 'function') { cb = options }
  const interval = setInterval(() => {
    request(uri, options, cb)
  }, options.interval || 5000)
  return function unsubscribe() {
    clearInterval(interval)
  }
}

module.exports = subscribe
