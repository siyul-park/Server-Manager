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

    // this._loginListenr = new LoginListener(this._app)
    // this._connectListenr = new ConnectListener(this._app)
    // this._disconnectListener = new DisconnectListener(this._app)

    // this.addListener(this._loginListenr)
    // this.addListener(this._connectListenr)
    // this.addListener(this._disconnectListener)

    this.linkEvent()
  }

  linkEvent () {
    let eventManager = this._app.eventManager
    let logger = this._logger
    let userManager = this._app.userManager

    this._socketServer.on('connection', function (socket) {
      let args = { socket: socket }

      let connectionEvent = new SocketConnectionEvent(args)
      eventManager.extuteEvent(connectionEvent)

      if (connectionEvent.isCancelled()) {
        logger.warning(connectionEvent.reason)
        return
      }

      userManager.evaluateUser(connectionEvent.user)
    })
  }
}

module.exports = SocketConnectManager
