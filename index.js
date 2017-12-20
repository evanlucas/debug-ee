'use strict'

const EE = require('events')
const emit = EE.prototype.emit

const debug = require('debug')

const names = new Map()

EE.prototype.emit = function(name, ...args) {
  if (this.constructor) {
    getLogger(this.constructor.name)('%s', name)
  } else {
    getLogger('<unknown>')('%s', name)
  }
  return emit.call(this, name, ...args)
}

function getLogger(name) {
  if (!names.has(name)) {
    const logger = debug(name)
    debug.enable(name)
    names.set(name, logger)
    return logger
  }

  return names.get(name)
}
