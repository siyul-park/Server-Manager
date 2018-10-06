const SocketEvent = require('./SocketEvent.js')

class SocketDisonnectionEvent extends SocketEvent {
  constructor (socket) {
    super(socket)
    this._eventName = 'SocketDisconnect'
  }
}

module.exports = SocketDisonnectionEvent
