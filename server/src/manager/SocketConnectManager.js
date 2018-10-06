const Manager = require('./Manager.js')
const LoginListenr = require('../Listener/LoginListenr')
const ConnectListenr = require('../Listener/ConnectListenr')
/*
const LoginManager = require('./LoginManager.js')
const DisconnectManager = require('./DisconnectManager.js')
const ChatManager = require('./ChatManager.js')
const CommandManager = require('./CommandManager.js')
*/

class SocketConnectManager extends Manager {
  init (args = {}) {
    this._socketServer = args.socketServer
    this._listener = []

    this._loginListenr = new LoginListenr(this._app)
    this._connectListenr = new ConnectListenr(this._app)

    this.addListener(this._loginListenr)
    this.addListener(this._connectListenr)

    this.linkListener()
  }

  addListener (listener) {
    this._listener.push(listener)
  }

  linkListener () {
    const listener = this._listener

    this._socketServer.on('connection', function (socket) {
      listener.forEach(element => {
        element.addListener(socket)
      })
    })
  }
}

module.exports = SocketConnectManager
