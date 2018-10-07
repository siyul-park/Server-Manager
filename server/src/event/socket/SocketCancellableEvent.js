const CancellableEvent = require('../CancellableEvent')

class SocketCancellableEvent extends CancellableEvent {
  constructor (data = {}) {
    super(data)
    this._eventName = SocketCancellableEvent.eventName
    this._socket = data.socket
  }

  static get eventName () {
    return 'socketCancellableEvent'
  }

  get socket () {
    return this._socket
  }
}

module.exports = SocketCancellableEvent
