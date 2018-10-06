const EventExecuter = require('../EventExecuter')

class UserJoinEventExecuter extends EventExecuter {
  constructor (app) {
    super(app)
    this._eventName = 'UserJoinEvent'
  }

  excute (event) {
    this._app.serverManager.socketServer.emit('userJoin', this._user.toObject())
  }
}

module.exports = UserJoinEventExecuter
