const Lang = require('../lang/Lang')
const Manager = require('./Manager')
const SocketConnectManager = require('./SocketConnectManager')

const { LEVEL } = require('../log/Logger')

const express = require('express')
const http = require('http')
const io = require('socket.io')
const path = require('path')

class ServerManager extends Manager {
  init (args = {}) {
    this._userList = []
    this._logger = this._app.logManager.getLogger(LEVEL.ALL)

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

    let logger = this._logger
    this._httpServer.listen(8080, function (req, res) {
      let endTime = new Date().getTime()

      logger.fine(Lang.format('msg.server.opened', [(endTime - startTime) / 1000]))
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
    return this._socketConnectManager.loginManager
  }

  get disconnectManager () {
    return this._socketConnectManager.disconnectManager
  }

  get chatManager () {
    return this._socketConnectManager.chatManager
  }

  get commandManager () {
    return this._socketConnectManager.commandManager
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
}

/*
class ServerManager extends Manager {
  async init() {
    this._userList = []
    this._logger = this._app.logManager.getLogger(LEVEL.ALL)

    let startTime = new Clock()
    this.socketServer = io.listen(http)

    this._logger.info('Server Manager version: ' + ServerManager.version)

    process.on('uncaughtException', (err) => {
      this._logger.warning(err.stack)
    })

    logger.info(Lang.format('server.loading.socket'))
    socketConnectManager = new SocketConnectManager(this.app)
    socketConnectManager.init()
    logger.info(Lang.format('server.loaded.socket'))

    logger.info(Lang.format('server.opening'))
    app.use(express.static(path.join(path.resolve(''), 'public')))

    http.listen(3000, () => {
      let endTime = new Clock()
      logger.info(Lang.format('server.open', [logger.info(Lang.format('server.open', [endTime.getDeltaTime(startTime) / 1000]))]))
    })
  }

  getPlayer(name) {
    for (let i in this.playerList) {
      if (this.playerList[i].getName() === name) {
        return this.playerList[i]
      }
    }

    return null
  }

  addPlayer(player) {
    for (let i in this.playerList) {
      if (this.playerList[i].getId() === player.getId()) {
        return
      }
    }
    this.playerList.push(player)
  }

  removePlayer(player) {
    for (let i in this.playerList) {
      if (this.playerList[i].getId() === player.getId()) {
        this.playerList.splice(i, 1)
        return
      }
    }
  }

  getPlayerById(id) {
    for (let i in this.playerList) {
      if (this.playerList[i].getId() === id) {
        return this.playerList[i]
      }
    }

    return null
  }

  getPlayers() {
    return this.playerList.slice()
  }

  getSocketServer() {
    return this.socketServer
  }

  getLoginManager() {
    return socketConnectManager.loginManager
  }

  getDisconnectManager() {
    return socketConnectManager.disconnectManager
  }

  getChatManager() {
    return socketConnectManager.chatManager
  }

  getCommandManager() {
    return socketConnectManager.commandManager
  }

  getSocketConnectManager() {
    return socketConnectManager
  }

  getName() {
    return 'server'
  }

  static get version() {
    return '0.0.1'
  }

  // Grade
  static get GRADE() {
    return {
      GUEST: 'guest',
      OPERATOR: 'operator',
      ADMINISTRATOR: 'admin'
    }
  }
}
*/
module.exports = ServerManager
