const Lang = require('../lang/Lang')
const Manager = require('./Manager')

const express = require('express')
const http = require('http')
const io = require('socket.io')
const path = require('path')

class ServerManager extends Manager {
  init (args = {}) {
    this._portNumber = args.portNumber || 3000
    this._clientPath = path.resolve('', args.clientPath || 'public')

    let startTime = new Date().getTime()

    this._logger.info(Lang.format('msg.manager.server.version', [ServerManager.version]))

    this._logger.info(Lang.format('msg.server.opening'))

    const interfaces = require('os').networkInterfaces()

    const addresses = Object.keys(interfaces)
      .reduce((results, name) => results.concat(interfaces[name]), [])
      .filter((iface) => iface.family === 'IPv4' && !iface.internal)
      .map((iface) => iface.address)

    const app = express()
    app.use(express.static(this._clientPath))

    this._httpServer = http.Server(app)
    this._logger.fine(Lang.format('msg.httpserver.created'))
    this._socketServer = io.listen(this._httpServer)
    this._logger.fine(Lang.format('msg.socketioserver.created'))

    let logger = this._logger
    let portNumber = this._portNumber
    this._httpServer.listen(portNumber, function (req, res) {
      let endTime = new Date().getTime()

      logger.fine(Lang.format('msg.server.opened', [addresses + ':' + portNumber, (endTime - startTime) / 1000]))
    })
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
  }
}

module.exports = ServerManager
