const Manager = require('./Manager.js')
const LoginManager = require('./LoginManager.js')
const DisconnectManager = require('./DisconnectManager.js')
const ChatManager = require('./ChatManager.js')
const CommandManager = require('./CommandManager.js')

class SocketConnectManager extends Manager {
  init () {
    this.loginManager = new LoginManager()
    this.disconnectManager = new DisconnectManager()
    this.chatManager = new ChatManager()
    this.commandManager = new CommandManager()
    this.commandManager.init()

    const socketConnectManager = this

    Vokkit.getServer().getSocketServer().on('connection', function (socket) {
      socketConnectManager.loginManager.addListener(socket)
      socketConnectManager.disconnectManager.addListener(socket)
      socketConnectManager.chatManager.addListener(socket)
      socketConnectManager.commandManager.addListener(socket)
    })
  }

  getLoginManager() {
    return this.loginManager
  }

  getDisconnectManager() {
    return this.disconnectManager
  }

  getChatManager() {
    return this.chatManager
  }

  getCommandManager() {
    return this.commandManager
  }
}

module.exports = SocketConnectManager
