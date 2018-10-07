const UserEvent = require('./UserEvent')

class AssignedGuestEvent extends UserEvent {
  constructor (data = {}) {
    super(data)
    this._eventName = AssignedGuestEvent.eventName
    this._name = data.name
  }

  set name (name) {
    this._name = name
  }
  get name () {
    return this._name
  }

  static get eventName () {
    return 'assigned_guest_id'
  }
}

module.exports = AssignedGuestEvent
