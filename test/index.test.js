'use strict'

const expect = require('chai').expect
const subscribe = require('../src')

describe('subscribe', () => {
  it('should return a function', () => {
    expect(subscribe('any', () => unsubscribe())).to.be.a('function')
  })  
  it('should make requests', done => {    
    const unsubscribe = subscribe('https://api.github.com/users/obi-jan-kenobi', {
      interval: 1500,
      headers: {
        'User-Agent': 'request'
      }}, (err, response, body) => {
      expect(!err).to.be.ok
      unsubscribe()
      done()
    })
  }).timeout(2500)
})
