const SocketEvent = require('./SocketEvent.js')

class SocketDisonnectionEvent extends SocketEvent {
  constructor (data = {}) {
    super(data)
    this._eventName = SocketDisonnectionEvent.eventName
  }

  static get eventName () {
    return 'disconnect'
  }
}

module.exports = SocketDisonnectionEvent
