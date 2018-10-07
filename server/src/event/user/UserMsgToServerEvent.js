const UserEvent = require('./UserEvent')

class UserMsgToServerEvent extends UserEvent {
  constructor (data = {}) {
    super(data)
    this._eventName = UserMsgToServerEvent.eventName
    this._message = data.message
  }

  get message () {
    return this._message
  }

  static get eventName () {
    return 'msg_to_server'
  }
}

module.exports = UserMsgToServerEvent
