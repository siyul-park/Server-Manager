const EventExecutor = require('../EventExecutor')

const ServerManager = require('../../manager/ServerManager')
const Lang = require('../../lang/Lang')
const UserManager = require('../../manager/UserManager')

class SocketDisonnectionEventExecutor extends EventExecutor {
  constructor (app) {
    super(app)
    this._eventName = 'disconnect'
  }

  excute (event) {
    let address = event.socket.request.connection._peername
    this._app._logger.info(Lang.format('msg.user.disconnect', [address.address, address.port]))

    let userManager = this._app.userManager
    let id = address.address + ':' + address.port
    let user = userManager.getUserByID(id)

    if (user.grade === UserManager.GRADE.GUEST) --userManager._guestNumber
    userManager.removeUser(user)

    this._app.logger.config(Lang.format('form.user.list', [ServerManager.version, userManager.getUsers().length]))
  }
}

module.exports = SocketDisonnectionEventExecutor
