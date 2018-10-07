const Manager = require('./Manager')
const EventPriority = require('../event/EventPriority.js')
const Lang = require('../lang/Lang')

const UserManager = require('./UserManager')

// const UserLoginEventExecutor = require('../event/user/UserLoginEventExecutor')
// const UserJoinEventExecutor = require('../event/user/UserJoinEventExecutor')
const SocketConnectionEventExecutor = require('../event/socket/SocketConnectionEventExecutor')
const SocketConnectionEvent = require('../event/socket/SocketConnectionEvent')
const SocketDisconnectionEventExecutor = require('../event/socket/SocketDisconnectionEventExecutor')
const SocketDisconnectionEvent = require('../event/socket/SocketDisconnectionEvent')
const UserMsgToServerEventExecutor = require('../event/user/UserMsgToServerEventExecutor')
const UserMsgToServerEvent = require('../event/user/UserMsgToServerEvent')

class EventManager extends Manager {
  init (args) {
    this._registeredExcutor = []
    this._registeredEvent = []

    this.registerExecutor(new SocketConnectionEventExecutor(this._app))
    this.registerEvent(SocketConnectionEvent)
    this.registerExecutor(new SocketDisconnectionEventExecutor(this._app))
    this.registerEvent(SocketDisconnectionEvent)
    this.registerExecutor(new UserMsgToServerEventExecutor(this._app))
    this.registerEvent(UserMsgToServerEvent)
  }

  registerExecutor (executor) {
    this._registeredExcutor.push(executor)
  }
  registerEvent (event, grade = UserManager.GRADE.GUEST) {
    let name = event.eventName

    this._logger.config(Lang.format('msg.event.added', [ name ]))
    this._registeredEvent.push({ Event: event, grade: grade })
  }

  extuteEvent (event) {
    for (let i in this._registeredExcutor) {
      if (this._registeredExcutor[i].eventName === event.eventName && this._registeredExcutor[i].eventPriority === EventPriority.HIGHEST) {
        this._registeredExcutor[i].excute(event)
      }
    }
    for (let i in this._registeredExcutor) {
      if (this._registeredExcutor[i].eventName === event.eventName && this._registeredExcutor[i].eventPriority === EventPriority.HIGH) {
        this._registeredExcutor[i].excute(event)
      }
    }
    for (let i in this._registeredExcutor) {
      if (this._registeredExcutor[i].eventName === event.eventName && this._registeredExcutor[i].eventPriority === EventPriority.NORMAL) {
        this._registeredExcutor[i].excute(event)
      }
    }
    for (let i in this._registeredExcutor) {
      if (this._registeredExcutor[i].eventName === event.eventName && this._registeredExcutor[i].eventPriority === EventPriority.LOW) {
        this._registeredExcutor[i].excute(event)
      }
    }
    for (let i in this._registeredExcutor) {
      if (this._registeredExcutor[i].eventName === event.eventName && this._registeredExcutor[i].eventPriority === EventPriority.LOWEST) {
        this._registeredExcutor[i].excute(event)
      }
    }
    for (let i in this._registeredExcutor) {
      if (this._registeredExcutor[i].eventName === event.eventName && this._registeredExcutor[i].eventPriority === EventPriority.MONITOR) {
        this._registeredExcutor[i].excute(event)
      }
    }
  }
}

module.exports = EventManager
