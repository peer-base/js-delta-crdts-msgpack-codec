'use strict'

const msgpack = require('msgpack-lite')

const codec = msgpack.createCodec()

codec.addExtPacker(0x40, Map, [mapPacker, msgpack.encode])
codec.addExtUnpacker(0x40, [msgpack.decode, mapUnpacker])

codec.addExtPacker(0x41, Set, [setPacker, msgpack.encode])
codec.addExtUnpacker(0x41, [msgpack.decode, setUnpacker])

const options = {
  codec
}

exports.encode = function encode (value) {
  return msgpack.encode(value, options)
}

exports.decode = function encode (value) {
  return msgpack.decode(value, options)
}

function mapPacker (map) {
  return Array.from(map)
}

function mapUnpacker (array) {
  return new Map(array)
}

function setPacker (set) {
  return Array.from(set)
}

function setUnpacker (array) {
  return new Set(array)
}
