const Lang = require('./lang/Lang')

const { Logger, ConsoleHandel, LEVEL } = require('./log/Logger')

const User = require('./entity/User')

const PluginManager = require('./manager/PluginManager')
const UserManager = require('./manager/UserManager')
const EventManager = require('./manager/EventManager')
const SocketConnectManager = require('./manager/SocketConnectManager')

class Client extends User {
  constructor (id, name, level = LEVEL.ALL) {
    super(id, 'Client')

    this._logger = new Logger(Lang.format('name.logger'))
    this._logger.level = level
    let consolehandle = new ConsoleHandel()
    consolehandle.level = LEVEL.ALL
    this._logger.addHandler(consolehandle)

    this._logger.info(Lang.format('msg.application.creating', [this._name]))
    this.init()
    this._logger.fine(Lang.format('msg.application.created', [this._name]))

    this._socket = io()
  }

  async init () {
    this._managers = []

    this._pluginManager = new PluginManager(this, Lang.format('name.manager.plugin'))
    this._pluginManager.load()
    try {
      await this._pluginManager.enable()
    } catch (e) {
      this._logger.warning(e.message)
    }

    this._userManager = new UserManager(this, Lang.format('name.manager.user'))
    this._eventManager = new EventManager(this, Lang.format('name.manager.event'))
    this._socketConnectManager = new SocketConnectManager(this, Lang.format('name.manager.socketConnect'))
  }

  addManager (manager) {
    return this._managers.push(manager)
  }

  getManager (name) {
    for (let i in this._managers) {
      if (this._managers[i].name === name) {
        return this._managers[i]
      }
    }
  }

  removeManager (name) {
    for (let i in this._managers) {
      if (this._managers[i].name === name) {
        this._managers[i].destroyer()
        this._managers[i].splice(i, 1)
        return
      }
    }
  }

  get socket () {
    return this._socket
  }
  get logger () {
    return this._logger
  }
  get socketConnectManager () {
    return this._socketConnectManager
  }
  get pluginManager () {
    return this._pluginManager
  }
  get eventManager () {
    return this._eventManager
  }
  get userManager () {
    return this._userManager
  }

  destroyer () {
    this._logger.info(Lang.format('msg.application.destroying', [this._name]))
    this.destroy()
    this._logger.fine(Lang.format('msg.application.destroyed', [this._name]))
  }

  destroy () {
    for (let i in this._managers) {
      this._managers[i].destroyer()
    }
    this._pluginManager.destroyer()
    this._eventManager.destroyer()
    this._socketConnectManager.destroyer()
    this._userManager.destroyer()
  }
}

module.exports = Client
