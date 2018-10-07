const EventExecutor = require('../EventExecutor')

class UserMsgToServerEventExecutor extends EventExecutor {
  constructor (app) {
    super(app)
    this._eventName = 'msg_to_server'
  }

  excute (event) {
    let userManager = this._app.userManager
    this._user = userManager.getUserBySocketID(event.socket.id)
    event.user = this._user

    this._app.logger.message(event.user.name, event.message)
  }
}

module.exports = UserMsgToServerEventExecutor
