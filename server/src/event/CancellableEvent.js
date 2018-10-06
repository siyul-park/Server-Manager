const Event = require('./Event.js')

class CancellableEvent extends Event {
  constructor () {
    super()
    this._cancelled = false
    this._reason = ''
  }

  set cancelled (cancelled = true) {
    this._cancelled = !!cancelled
  }

  isCancelled () {
    return this._cancelled
  }

  get reason () {
    return this._reason
  }

  set reason (reason) {
    this._reason = reason
  }
}

module.exports = CancellableEvent
