const SocketCancellableEvent = require('./SocketCancellableEvent')

class SocketConnectionEvent extends SocketCancellableEvent {
  constructor (data = {}) {
    super(data)
    this._eventName = SocketConnectionEvent.eventName
  }
  get user () {
    return this._user
  }
  set user (user) {
    this._user = user
  }

  static get eventName () {
    return 'connection'
  }
}

module.exports = SocketConnectionEvent
