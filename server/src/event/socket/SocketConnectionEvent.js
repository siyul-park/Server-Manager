const SocketEvent = require('./SocketEvent.js')

class SocketConnectionEvent extends SocketEvent {
  constructor (socket) {
    super(socket)
    this._eventName = 'SocketConnect'
  }
}

module.exports = SocketConnectionEvent
