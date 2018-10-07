const CancellableEvent = require('../CancellableEvent.js')

class CancellableUserEvent extends CancellableEvent {
  constructor (user) {
    super()
    this._user = user
  }

  get user () {
    return this._user
  }
}

module.exports = CancellableUserEvent
