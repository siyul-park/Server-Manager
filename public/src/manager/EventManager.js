const Manager = require('./Manager')
const EventPriority = require('../event/EventPriority.js')
const Lang = require('../lang/Lang')

const UserManager = require('./UserManager')

const UserMsgByServerEventExecutor = require('../event/user/UserMsgByServerEvent')
const UserMsgByServerEvent = require('../event/user/UserMsgByServerEvent')
const AssignedGuestEventExecutor = require('../event/user/AssignedGuestEventExecutor')
const AssignedGuestEvent = require('../event/user/AssignedGuestEvent')

class EventManager extends Manager {
  init (args) {
    this._registeredExcutor = []
    this._registeredEvent = []

    this.registerExecutor(new UserMsgByServerEventExecutor(this._app))
    this.registerEvent(UserMsgByServerEvent)
    this.registerExecutor(new AssignedGuestEventExecutor(this._app))
    this.registerEvent(AssignedGuestEvent)
  }

  registerExecutor (executor) {
    this._registeredExcutor.push(executor)
  }
  registerEvent (event, grade = UserManager.GRADE.GUEST) {
    let name = event.eventName

    this._logger.config(Lang.format('msg.event.added', [ name ]))
    this._registeredEvent.push({ Event: event, grade: grade })
  }

  sendEvent (name, args = {}) {
    let socket = this._app.socket
    let obj = { senderID: this._app.id }
    Object.assign(args, obj)

    socket.emit(name, args)
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
