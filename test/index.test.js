'use strict'
jest.mock('request')
const subscribe = require('../src')

describe('subscribe', () => {
  it('should return a function', () => {
    expect(subscribe('any', () => unsubscribe())).toBeInstanceOf(Function)
  })  
  it('should make requests', done => {
    const request = require('request')
    request.mockImplementation((uri, options, cb) => cb(1))
    const unsubscribe = subscribe('https://api.github.com/users/obi-jan-kenobi', {
      interval: 5,
      headers: {
        'User-Agent': 'request'
      }}, (err, response, body) => {
      expect(request).toBeCalled()
      unsubscribe()
      done()
    })
  })
  it('should make several requests', done => {
    const request = require('request')
    let counter = 0
    request.mockImplementation((uri, options, cb) => cb(++counter))
    const unsubscribe = subscribe('https://api.github.com/users/obi-jan-kenobi', {
      interval: 1,
      headers: {
        'User-Agent': 'request'
      }}, (err, response, body) => {
    })
    setTimeout(() => {
      expect(counter).toBeGreaterThanOrEqual(3)
      unsubscribe()
      done()
    }, 6)
  })
})
