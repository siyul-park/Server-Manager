const Manager = require('./Manager.js')
/*
const LoginManager = require('./LoginManager.js')
const DisconnectManager = require('./DisconnectManager.js')
const ChatManager = require('./ChatManager.js')
const CommandManager = require('./CommandManager.js')
*/

class SocketConnectManager extends Manager {
  init (args = {}) {
    this._socketServer = args.socketServer

    /*
    this._loginManager = new LoginManager()
    this._disconnectManager = new DisconnectManager()
    this._chatManager = new ChatManager()
    this._commandManager = new CommandManager()

    const socketConnectManager = this

    this._socketServer.on('connection', function (socket) {
      socketConnectManager._loginManager.addListener(socket)
      socketConnectManager._disconnectManager.addListener(socket)
      socketConnectManager._chatManager.addListener(socket)
      socketConnectManager._commandManager.addListener(socket)
    })
    */
  }

  get loginManager () {
    return this._loginManager
  }

  get disconnectManager () {
    return this._disconnectManager
  }

  get chatManager () {
    return this._chatManager
  }

  get commandManager () {
    return this._commandManager
  }
}

module.exports = SocketConnectManager
