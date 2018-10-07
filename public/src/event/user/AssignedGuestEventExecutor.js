const EventExecutor = require('../EventExecutor')
const Lang = require('../../lang/Lang')

class AssignedGuestEventExecutor extends EventExecutor {
  constructor (app) {
    super(app)
    this._eventName = 'assigned_guest_id'
  }

  excute (event) {
    this._app._id = event.id
    this._app.name = event.name

    this._app.logger.config(Lang.format('form.user.login', [this._app.name, this._app.id]))
  }
}

module.exports = AssignedGuestEventExecutor
