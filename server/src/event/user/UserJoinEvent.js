const UserEvent = require('./UserEvent.js')

class UserJoinEvent extends UserEvent {
  constructor (user, joinMessage) {
    super(user)
    this._eventName = 'UserJoinEvent'
    this._joinMessage = joinMessage
  }

  get joinMessage () {
    return this._joinMessage
  }

  set joinMessage (joinMessage) {
    this._joinMessage = joinMessage
  }
}

module.exports = UserJoinEvent
