const EventPriority = require('./EventPriority.js')

class EventExecuter {
  constructor (app) {
    this._app = app
    this._plugin = undefined
    this._eventName = ''
    this._eventPriority = EventPriority.NORMAL
  }
  get eventName () {
    return this._eventName
  }

  get plugin () {
    return this._plugin
  }

  get eventPriority () {
    return this._eventPriority
  }

  excute (event) {}
}

module.exports = EventExecuter
