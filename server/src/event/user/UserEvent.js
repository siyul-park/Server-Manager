const Event = require('../Event.js')

class UserEvent extends Event {
  constructor (user) {
    super()
    this._user = user
  }

  get user () {
    return this._user
  }
}

module.exports = UserEvent
