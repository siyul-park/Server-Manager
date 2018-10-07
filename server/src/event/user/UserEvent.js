const Event = require('../Event.js')

class UserEvent extends Event {
  constructor (data = {}) {
    super(data)
    this._eventName = UserEvent.eventName
    this._socket = data.socket
  }

  get socket () {
    return this._socket
  }
  get user () {
    return this._user
  }
  set user (user) {
    this._user = user
  }

  static get eventName () {
    return 'UserEvent'
  }
}

module.exports = UserEvent
