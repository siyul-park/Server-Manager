const Lang = require('../lang/Lang')

class Manager {
  constructor (app, name, args = {}) {
    this._app = app
    this._name = name
    this._logger = this._app.logger

    this._logger.info(Lang.format('msg.creating', [this._name]))
    this.init(args)
    this._logger.fine(Lang.format('msg.created', [this._name]))
  }

  init (args = {}) { }

  destroyer () {
    this._logger.info(Lang.format('msg.destroying', [this._name]))
    this.destroy()
    this._logger.fine(Lang.format('msg.destroyed', [this._name]))
  }

  destroy () { }

  get name () {
    return this._name
  }

  get logger () {
    return this._logger
  }
}

module.exports = Manager
