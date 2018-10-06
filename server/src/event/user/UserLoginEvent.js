const CancellableUserEvent = require('./CancellableUserEvent.js')

class UserLoginEvent extends CancellableUserEvent {
  constructor (user, address) {
    super(user)
    this._eventName = 'UserLoginEvent'
    this._address = address
  }

  get address () {
    return this._address
  }
}

module.exports = UserLoginEvent
