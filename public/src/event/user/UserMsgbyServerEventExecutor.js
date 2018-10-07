const EventExecutor = require('../EventExecutor')

class UserMsgByServerEventExecutor extends EventExecutor {
  constructor (app) {
    super(app)
    this._eventName = 'msg_by_server'
  }

  excute (event) {
    this._app.logger.message('Server', event.message)
  }
}

module.exports = UserMsgByServerEventExecutor
