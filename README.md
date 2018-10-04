# js-delta-crdts-msgpack-codec

Msgpack codec for delta-crdts

[![made by Protocol Labs](https://img.shields.io/badge/made%20by-Protocol%20Labs-blue.svg?style=flat-square)](https://protocol.ai)

[![Build Status](https://travis-ci.org/ipfs-shipyard/delta-crdts-msgpack-codec.svg?branch=master)](https://travis-ci.org/ipfs-shipyard/delta-crdts-msgpack-codec)

# API

```
const codec = require('delta-crdts-msgpack-codec')
const delta = /// from the network

const rawDelta = codec.encode(delta)
const delta = codec.decode(rawDelta)
```

# Contribute

[![](https://cdn.rawgit.com/jbenet/contribute-ipfs-gif/master/img/contribute.gif)](https://github.com/ipfs/community/blob/master/contributing.md)

# License

MIT
