'use strict'

const msgpack = require('msgpack5')()
msgpack.register(0x40, Map, encodeMap, decodeMap)
msgpack.register(0x41, Set, encodeSet, decodeSet)

// codec.addExtPacker(0x40, Map, [mapPacker, msgpack.encode])
// codec.addExtUnpacker(0x40, [msgpack.decode, mapUnpacker])

// codec.addExtPacker(0x41, Set, [setPacker, msgpack.encode])
// codec.addExtUnpacker(0x41, [msgpack.decode, setUnpacker])

function encodeMap (map) {
  return msgpack.encode(Array.from(map))
}

function decodeMap (buf) {
  return new Map(msgpack.decode(buf))
}

function encodeSet (set) {
  return msgpack.encode(Array.from(set))
}

function decodeSet (buf) {
  return new Set(msgpack.decode(buf))
}

exports.encode = function encode (value) {
  return msgpack.encode(value)
}

exports.decode = function encode (value) {
  return msgpack.decode(value)
}
