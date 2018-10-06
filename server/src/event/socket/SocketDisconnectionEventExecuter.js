const EventExecuter = require('../EventExecuter')
const Lang = require('../../lang/Lang')

class SocketDisonnectionEventExecuter extends EventExecuter {
  constructor (app) {
    super(app)
    this._eventName = 'SocketDisconnect'
  }

  excute (event) {
    let address = event.socket.request.connection._peername
    this._app._logger.info(Lang.format('msg.user.disconnect', [address.address, address.port]))
  }
}

module.exports = SocketDisonnectionEventExecuter
