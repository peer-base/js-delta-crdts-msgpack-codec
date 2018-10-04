/* eslint-env mocha */
'use strict'

const chai = require('chai')
chai.use(require('dirty-chai'))
const expect = chai.expect

const codec = require('../')

describe('codec', () => {
  const encodable = [1, 'a', { b: 'c' }, new Set(['d']), new Map([['e', 'f']])]
  let encoded
  it('encodes', () => {
    encoded = codec.encode(encodable)
    expect(Buffer.isBuffer(encoded)).to.be.true()
  })

  it('decodes', () => {
    const decoded = codec.decode(encoded)
    expect(decoded).to.deep.equal(encodable)
  })
})
