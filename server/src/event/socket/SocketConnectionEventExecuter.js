const EventExecuter = require('../EventExecuter')
const Lang = require('../../lang/Lang')

class SocketConnectionEventExecuter extends EventExecuter {
  constructor (app) {
    super(app)
    this._eventName = 'SocketConnect'
  }

  excute (event) {
    let address = event.socket.request.connection._peername

    this._app._logger.info(Lang.format('msg.user.connect', [address.address, address.port]))
  }
}

module.exports = SocketConnectionEventExecuter
