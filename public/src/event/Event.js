class Event {
  constructor (data = {}) {
    this._data = data
    this._eventName = Event.eventName
  }

  get eventName () {
    return this._eventName
  }

  static get eventName () {
    return ''
  }
}

module.exports = Event
