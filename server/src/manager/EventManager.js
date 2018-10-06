const Manager = require('./Manager')
const EventPriority = require('../event/EventPriority.js')

const UserLoginEventExecuter = require('../event/user/UserLoginEventExecuter')
const UserJoinEventExecuter = require('../event/user/UserJoinEventExecuter')
const SocketConnectionEventExecuter = require('../event/socket/SocketConnectionEventExecuter')
const SocketDisconnectionEventExecuter = require('../event/socket/SocketDisconnectionEventExecuter')

class EventManager extends Manager {
  init (args) {
    this._registeredExcuter = []

    this.registerEvent(new UserLoginEventExecuter(this._app))
    this.registerEvent(new UserJoinEventExecuter(this._app))
    this.registerEvent(new SocketConnectionEventExecuter(this._app))
    this.registerEvent(new SocketDisconnectionEventExecuter(this._app))
  }

  registerEvent (eventExecuter) {
    this._registeredExcuter.push(eventExecuter)
  }

  extuteEvent (event) {
    for (let i in this._registeredExcuter) {
      if (this._registeredExcuter[i].eventName === event.eventName && this._registeredExcuter[i].eventPriority === EventPriority.HIGHEST) {
        this._registeredExcuter[i].excute(event)
      }
    }
    for (let i in this._registeredExcuter) {
      if (this._registeredExcuter[i].eventName === event.eventName && this._registeredExcuter[i].eventPriority === EventPriority.HIGH) {
        this._registeredExcuter[i].excute(event)
      }
    }
    for (let i in this._registeredExcuter) {
      if (this._registeredExcuter[i].eventName === event.eventName && this._registeredExcuter[i].eventPriority === EventPriority.NORMAL) {
        this._registeredExcuter[i].excute(event)
      }
    }
    for (let i in this._registeredExcuter) {
      if (this._registeredExcuter[i].eventName === event.eventName && this._registeredExcuter[i].eventPriority === EventPriority.LOW) {
        this._registeredExcuter[i].excute(event)
      }
    }
    for (let i in this._registeredExcuter) {
      if (this._registeredExcuter[i].eventName === event.eventName && this._registeredExcuter[i].eventPriority === EventPriority.LOWEST) {
        this._registeredExcuter[i].excute(event)
      }
    }
    for (let i in this._registeredExcuter) {
      if (this._registeredExcuter[i].eventName === event.eventName && this._registeredExcuter[i].eventPriority === EventPriority.MONITOR) {
        this._registeredExcuter[i].excute(event)
      }
    }
  }
}

module.exports = EventManager
