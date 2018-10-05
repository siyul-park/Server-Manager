const Lang = require('../lang/Lang')
const { LEVEL } = require('../log/Logger')

class Manager {
  constructor (app, name) {
    this._app = app
    this._name = name
    this._logger = this._app.logManager.getLogger(LEVEL.ALL)

    this._logger.info(Lang.format('msg.creating', [this._name]))
    this.init()
    this._logger.fine(Lang.format('msg.created', [this._name]))
  }

  init () { }

  destroyer () {
    this._logger.info(Lang.format('msg.destroying', [this._name]))
    this.destroy()
    this._logger.fine(Lang.format('msg.destroyed', [this._name]))
  }

  destroy () { }
}

module.exports = Manager
