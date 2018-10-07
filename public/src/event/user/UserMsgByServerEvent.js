const UserEvent = require('./UserEvent')

class UserMsgByServerEvent extends UserEvent {
  constructor (data = {}) {
    super(data)
    this._eventName = UserMsgByServerEvent.eventName
    this._message = data.message
  }

  get message () {
    return this._message
  }

  static get eventName () {
    return 'msg_by_server'
  }
}

module.exports = UserMsgByServerEvent
