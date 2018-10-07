const Event = require('../Event.js')

class SocketEvent extends Event {
  constructor (data = {}) {
    super(data)
    this._eventName = SocketEvent.eventName
    this._socket = data.socket
  }

  static get eventName () {
    return 'socketEvent'
  }

  get socket () {
    return this._socket
  }
}

module.exports = SocketEvent
