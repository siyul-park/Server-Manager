const Lang = require('./lang/Lang')

const LogManager = require('./manager/LogManager')
const ServerManager = require('./manager/ServerManager')
const ConsoleManager = require('./manager/ConsoleManager')
const PluginManager = require('./manager/PluginManager')
const UserManager = require('./manager/UserManager')
const EventManager = require('./manager/EventManager')
const SocketConnectManager = require('./manager/SocketConnectManager')

const { LEVEL } = require('./log/Logger')

class Server {
  constructor (name) {
    this._name = name || Lang.format('name.application')

    this._logManager = new LogManager(this, Lang.format('name.manager.log'))
    this._logger = this._logManager.getLogger(LEVEL.ALL)

    this._logger.info(Lang.format('msg.application.creating', [this._name]))
    this.init()
    this._logger.fine(Lang.format('msg.application.created', [this._name]))
  }

  async init () {
    this._serverManager = new ServerManager(this, Lang.format('name.manager.server'), { portNumber: 3000, clientPath: 'site' })
    this._consoleManager = new ConsoleManager(this, Lang.format('name.manager.console'))

    this._pluginManager = new PluginManager(this, Lang.format('name.manager.plugin'), { clientPath: 'site' })
    this._pluginManager.loadPlugins()
    try {
      await this._pluginManager.enablePlugins()
    } catch (e) {
      this._logger.warning(e.message)
    }

    this._userManager = new UserManager(this, Lang.format('name.manager.user'))
    this._eventManager = new EventManager(this, Lang.format('name.manager.event'))
    this._socketConnectManager = new SocketConnectManager(this,
      Lang.format('name.manager.socketConnect'),
      { socketServer: this._serverManager.socketServer })
  }

  get name () {
    return this._name
  }
  get logManager () {
    return this._logManager
  }
  get logger () {
    return this._logger
  }
  get serverManager () {
    return this._serverManager
  }
  get socketConnectManager () {
    return this._socketConnectManager
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
  get userManager () {
    return this._userManager
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
    this._socketConnectManager.destroyer()
    this._userManager.destroyer()
  }
}

module.exports = Server
