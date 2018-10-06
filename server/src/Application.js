const Lang = require('./lang/Lang')

const LogManager = require('./manager/LogManager')
const ServerManager = require('./manager/ServerManager')
const ConsoleManager = require('./manager/ConsoleManager')
const PluginManager = require('./manager/PluginManager')
const EventManager = require('./manager/EventManager')
const SocketConnectManager = require('./manager/SocketConnectManager')
const LoginManager = require('./manager/LoginManager')

const { LEVEL } = require('./log/Logger')

class Application {
  constructor (name) {
    this._name = name || Lang.format('name.application')

    this._logManager = new LogManager(this, Lang.format('name.manager.log'))
    this._logger = this._logManager.getLogger(LEVEL.ALL)

    this._logger.info(Lang.format('msg.application.creating', [this._name]))
    this.init()
    this._logger.fine(Lang.format('msg.application.created', [this._name]))
  }

  async init () {
    this._serverManager = new ServerManager(this, Lang.format('name.manager.server'), { portNumber: 3000 })
    this._consoleManager = new ConsoleManager(this, Lang.format('name.manager.console'))

    this._pluginManager = new PluginManager(this, Lang.format('name.manager.plugin'))
    this._pluginManager.loadPlugins()
    try {
      await this._pluginManager.enablePlugins()
    } catch (e) {
      this._logger.warning(e.message)
    }

    this._eventManager = new EventManager(this, Lang.format('name.manager.event'))
    this._socketConnectManager = new SocketConnectManager(this,
      Lang.format('name.manager.socketConnect'),
      { socketServer: this._serverManager.socketServer })

    this._loginManager = new LoginManager(this, Lang.format('name.manager.login'))
    this._socketConnectManager.addSocketManager(this._loginManager)

    this._socketConnectManager.linkListener()
  }

  get name () {
    return this._name
  }
  get logManager () {
    return this._logManager
  }
  get serverManager () {
    return this._serverManager
  }
  get socketConnectManager () {
    return this._socketConnectManager
  }
  get loginManager () {
    return this._loginManager
  }
  get consoleManager () {
    return this._consoleManager
  }
  get pluginManager () {
    return this._pluginManager
  }
  get eventManager () {
    return this._eventManager
  }

  destroyer () {
    this._logger.info(Lang.format('msg.application.destroying', [this._name]))
    this.destroy()
    this._logManager.destroyer()
    this._logger.fine(Lang.format('msg.application.destroyed', [this._name]))

    process.exit()
  }

  destroy () {
    this._serverManager.destroyer()
    this._consoleManager.destroyer()
    this._pluginManager.destroyer()
    this._eventManager.destroyer()
    this._logManager.destroyer()
    this._socketConnectManager.destroyer()
  }
}

module.exports = Application
