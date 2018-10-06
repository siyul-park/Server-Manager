const EventExecuter = require('../EventExecuter')

class SocketConnectionEventExecuter extends EventExecuter {
  constructor (app) {
    super(app)
    this._eventName = 'SocketConnect'
  }

  excute (event) {
    this._app.serverManager.socketServer.emit('userJoin', this._user.toObject())
  }
}

module.exports = SocketConnectionEventExecuter
