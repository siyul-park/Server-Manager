const Lang = require('../lang/Lang')
const Manager = require('./Manager')
const SocketConnectManager = require('./SocketConnectManager')
const LoginManager = require('./LoginManager')

const express = require('express')
const http = require('http')
const io = require('socket.io')
const path = require('path')

class ServerManager extends Manager {
  init (args = {}) {
    this._userList = []
    this._portNumber = args.portNumber || 3000

    let startTime = new Date().getTime()

    this._logger.info(Lang.format('msg.manager.server.version', [ServerManager.version]))

    this._logger.info(Lang.format('msg.server.opening'))

    const app = express()
    app.use(express.static(path.join(__dirname, 'public')))

    this._httpServer = http.Server(app)
    this._logger.fine(Lang.format('msg.httpserver.created'))
    this._socketServer = io.listen(this._httpServer)
    this._logger.fine(Lang.format('msg.socketioserver.created'))

    this._socketConnectManager = new SocketConnectManager(this._app,
      Lang.format('name.manager.socketConnect'),
      { socketServer: this._socketServer })

    this._loginManager = new LoginManager(this._app, Lang.format('name.manager.login'))
    this._socketConnectManager.addSocketManager(this._loginManager)

    this._socketConnectManager.linkListener()

    let logger = this._logger
    let portNumber = this._portNumber
    this._httpServer.listen(portNumber, function (req, res) {
      let endTime = new Date().getTime()

      logger.fine(Lang.format('msg.server.opened', [portNumber, (endTime - startTime) / 1000]))
    })
  }

  getUser (name) {
    for (let i in this._userList) {
      if (this._userList[i].getName() === name) {
        return this._userList[i]
      }
    }

    return null
  }

  addUser (user) {
    for (let i in this._userList) {
      if (this._userList[i].getId() === user.getId()) {
        return
      }
    }
    this._userList.push(user)
  }

  removeUser (user) {
    for (let i in this._userList) {
      if (this._userList[i].getId() === user.getId()) {
        this._userList.splice(i, 1)
        return
      }
    }
  }

  getUserById (id) {
    for (let i in this._userList) {
      if (this._userList[i].getId() === id) {
        return this._userList[i]
      }
    }

    return null
  }

  getUsers () {
    return this._userList.slice()
  }

  get socketServer () {
    return this._socketServer
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

  get socketConnectManager () {
    return this._socketConnectManager
  }

  // Grade
  static get GRADE () {
    return {
      GUEST: 'guest',
      OPERATOR: 'operator',
      ADMINISTRATOR: 'admin'
    }
  }

  static get version () {
    return '0.0.1'
  }

  destroy () {
    this._loginManager.destroyer()
    this._socketConnectManager.destroyer()
  }
}

module.exports = ServerManager
