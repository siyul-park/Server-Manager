const EventExecuter = require('../EventExecuter')

const ServerManager = require('../../manager/ServerManager')
const Lang = require('../../lang/Lang')

class SocketDisonnectionEventExecuter extends EventExecuter {
  constructor (app) {
    super(app)
    this._eventName = 'disconnect'
  }

  excute (event) {
    let address = event.socket.request.connection._peername
    this._app._logger.info(Lang.format('msg.user.disconnect', [address.address, address.port]))

    let userManager = this._app.userManager
    let id = address.address + ':' + address.port
    let user = userManager.getUserById(id)

    userManager.removeUser(user)

    this._app.logger.config(Lang.format('form.user.list', [ServerManager.version, userManager.getUsers().length]))
  }
}

module.exports = SocketDisonnectionEventExecuter
