const Manager = require('./Manager.js')

class SocketConnectManager extends Manager {
  init (args = {}) {
    this._socket = args.socket

    this.linkEvent()
  }

  linkEvent () {
    let eventManager = this._app.eventManager
    let events = eventManager._registeredEvent
    let socket = this._app.socket

    events.forEach(element => {
      socket.on(element.Event.eventName, function (data) {
        eventManager.extuteEvent(new element.Event(data))
      })
    })
  }
}

module.exports = SocketConnectManager
