const Manager = require('./Manager.js')

const SocketConnectionEvent = require('../event/socket/SocketConnectionEvent')
// const LoginListener = require('../listener/LoginListener')
// const ConnectListener = require('../listener/ConnectListener')
// const DisconnectListener = require('../listener/DisconnectListener')
/*
const LoginManager = require('./LoginManager.js')
const DisconnectManager = require('./DisconnectManager.js')
const ChatManager = require('./ChatManager.js')
const CommandManager = require('./CommandManager.js')
*/

class SocketConnectManager extends Manager {
  init (args = {}) {
    this._socketServer = args.socketServer
    this._listeners = []

    // this._loginListenr = new LoginListener(this._app)
    // this._connectListenr = new ConnectListener(this._app)
    // this._disconnectListener = new DisconnectListener(this._app)

    // this.addListener(this._loginListenr)
    // this.addListener(this._connectListenr)
    // this.addListener(this._disconnectListener)

    this.linkEvent()
  }

  addListener (listener) {
    this._listeners.push(listener)
  }

  linkEvent () {
    let eventManager = this._app.eventManager
    let events = eventManager._registeredEvent
    let logger = this._logger

    this._socketServer.on('connection', function (socket) {
      let args = { socket: socket }

      let connectionEvent = new SocketConnectionEvent(args)
      eventManager.extuteEvent(connectionEvent)

      if (connectionEvent.isCancelled()) {
        logger.warning(connectionEvent.reason)
        return
      }

      events.forEach(element => {
        if (connectionEvent.user.grade >= element.grade) {
          socket.on(element.Event.eventName, function (data) {
            Object.assign(args, data)
            eventManager.extuteEvent(new element.Event(args))
          })
        }
      })
    })
  }
}

module.exports = SocketConnectManager
