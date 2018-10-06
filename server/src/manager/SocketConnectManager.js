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
    this._soketManagers = []
  }

  addSocketManager (manager) {
    this._soketManagers.push(manager)
  }

  linkListener () {
    const soketManagers = this._soketManagers

    this._socketServer.on('connection', function (socket) {
      soketManagers.forEach(element => {
        element.addListener(socket)
      })
    })
  }
}

module.exports = SocketConnectManager
