const Lang = require('./lang/Lang')
const Manager = require('./Manager.js')
const LogManager = require('./LogManager')

const Clock = require('../log/Clock')
const { LEVEL } = require('../log/Logger')

const express = require('express')
const app = express()
const http = require('http').Server(app)
const io = require('socket.io')
const path = require('path')

class ServerManager extends Manager {
  async init () {
    this._userList = []
    this._logger = this._app.logManager.getLogger(LEVEL.ALL)

    let startTime = new Clock()
    this._socketServer = io.listen(http)

    this._logger.info(Lang.format('msg.manager.server.version', [ServerManager.version])

    process.on('uncaughtException', (err) => {
      this._logger.warning(err.stack)
    })
  }
}


class ServerManager extends Manager {
  async init () {
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

  getPlayer (name) {
    for (let i in this.playerList) {
      if (this.playerList[i].getName() === name) {
        return this.playerList[i]
      }
    }

    return null
  }

  addPlayer (player) {
    for (let i in this.playerList) {
      if (this.playerList[i].getId() === player.getId()) {
        return
      }
    }
    this.playerList.push(player)
  }

  removePlayer (player) {
    for (let i in this.playerList) {
      if (this.playerList[i].getId() === player.getId()) {
        this.playerList.splice(i, 1)
        return
      }
    }
  }

  getPlayerById (id) {
    for (let i in this.playerList) {
      if (this.playerList[i].getId() === id) {
        return this.playerList[i]
      }
    }

    return null
  }

  getPlayers () {
    return this.playerList.slice()
  }

  getSocketServer () {
    return this.socketServer
  }

  getLoginManager () {
    return socketConnectManager.loginManager
  }

  getDisconnectManager () {
    return socketConnectManager.disconnectManager
  }

  getChatManager () {
    return socketConnectManager.chatManager
  }

  getCommandManager () {
    return socketConnectManager.commandManager
  }

  getSocketConnectManager () {
    return socketConnectManager
  }

  getName () {
    return 'server'
  }

  static get version () {
    return '0.0.1'
  }

  // Grade
  static get GRADE () {
    return {
      GUEST: 'guest',
      OPERATOR: 'operator',
      ADMINISTRATOR: 'admin'
    }
  }
}

module.exports = ServerManager
