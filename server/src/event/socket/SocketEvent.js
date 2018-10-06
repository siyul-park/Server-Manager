const Event = require('../Event.js')

class SocketEvent extends Event {
  constructor (socket) {
    super()
    this._socket = socket
  }

  get socket () {
    return this._socket
  }
}

module.exports = SocketEvent
