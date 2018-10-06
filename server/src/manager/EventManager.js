const Manager = require('./Manager')
const EventPriority = require('../event/EventPriority.js')
const UserLoginEventExecuter = require('../event/user/UserLoginEventExecuter')
const UserJoinEventExecuter = require('../event/user/UserJoinEventExecuter')

class EventManager extends Manager {
  init (args) {
    this._registeredEvents = []

    this.registerEvent(new UserLoginEventExecuter(this._app))
    this.registerEvent(new UserJoinEventExecuter(this._app))
  }

  registerEvent (eventExecuter) {
    this._registeredEvents.push(eventExecuter)
  }

  extuteEvent (event) {
    for (let i in this._registeredEvents) {
      if (this._registeredEvents[i].name === event.name && this._registeredEvents[i].eventPriority === EventPriority.HIGHEST) {
        this._registeredEvents[i].excute(event)
      }
    }
    for (let i in this._registeredEvents) {
      if (this._registeredEvents[i].name === event.name && this._registeredEvents[i].eventPriority === EventPriority.HIGH) {
        this._registeredEvents[i].excute(event)
      }
    }
    for (let i in this._registeredEvents) {
      if (this._registeredEvents[i].name === event.name && this._registeredEvents[i].eventPriority === EventPriority.NORMAL) {
        this._registeredEvents[i].excute(event)
      }
    }
    for (let i in this._registeredEvents) {
      if (this._registeredEvents[i].name === event.name && this._registeredEvents[i].eventPriority === EventPriority.LOW) {
        this._registeredEvents[i].excute(event)
      }
    }
    for (let i in this._registeredEvents) {
      if (this._registeredEvents[i].name === event.name && this._registeredEvents[i].eventPriority === EventPriority.LOWEST) {
        this._registeredEvents[i].excute(event)
      }
    }
    for (let i in this._registeredEvents) {
      if (this._registeredEvents[i].name === event.name && this._registeredEvents[i].eventPriority === EventPriority.MONITOR) {
        this._registeredEvents[i].excute(event)
      }
    }
  }
}

module.exports = EventManager
