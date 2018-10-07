const Event = require('../Event.js')

class UserEvent extends Event {
  constructor (data = {}) {
    super(data)
    this._eventName = UserEvent.eventName
    this._id = data.id
  }

  get id () {
    return this._id
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
