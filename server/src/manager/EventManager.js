const Manager = require('./Manager')
const EventPriority = require('../event/EventPriority.js')
const Lang = require('../lang/Lang')

const UserManager = require('./UserManager')

// const UserLoginEventExecuter = require('../event/user/UserLoginEventExecuter')
// const UserJoinEventExecuter = require('../event/user/UserJoinEventExecuter')
const SocketConnectionEventExecuter = require('../event/socket/SocketConnectionEventExecuter')
const SocketConnectionEvent = require('../event/socket/SocketConnectionEvent')
const SocketDisconnectionEventExecuter = require('../event/socket/SocketDisconnectionEventExecuter')
const SocketDisconnectionEvent = require('../event/socket/SocketDisconnectionEvent')

class EventManager extends Manager {
  init (args) {
    this._registeredExcuter = []
    this._registeredEvent = []

    // this.registerExecuter(new UserLoginEventExecuter(this._app))
    // this.registerExecuter(new UserJoinEventExecuter(this._app))
    this.registerExecuter(new SocketConnectionEventExecuter(this._app))
    this.registerEvent(SocketConnectionEvent)
    this.registerExecuter(new SocketDisconnectionEventExecuter(this._app))
    this.registerEvent(SocketDisconnectionEvent)
    // this.registerExecuter(new SocketDisconnectionEventExecuter(this._app))
  }

  registerExecuter (executer) {
    this._registeredExcuter.push(executer)
  }
  registerEvent (event, grade = UserManager.GRADE.GUEST) {
    let name = event.eventName

    this._logger.config(Lang.format('msg.event.added', [ name ]))
    this._registeredEvent.push({ Event: event, grade: grade })
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
