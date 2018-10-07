const EventExecutor = require('../EventExecutor')

const ServerManager = require('../../manager/ServerManager')
const Lang = require('../../lang/Lang')

const User = require('../../entity/User')
const UserManager = require('../../manager/UserManager')

class SocketConnectionEventExecutor extends EventExecutor {
  constructor (app) {
    super(app)
    this._eventName = 'connection'
  }

  excute (event) {
    let address = event.socket.request.connection._peername
    this._app.logger.info(Lang.format('msg.user.connect', [address.address, address.port]))

    let userManager = this._app.userManager
    let id = address.address + ':' + address.port
    let user = new User(id, 'Guest' + (++userManager._guestNumber), UserManager.GRADE.GUEST, event.socket)

    if (user.name.length === 0) {
      event.cancelled = true
      event.reason = Lang.format('err.login.emptyId')
    } else if (user.name.length >= 20) {
      event.cancelled = true
      event.reason = Lang.format('err.login.longId')
    } else if (!userManager.addUser(user)) {
      event.cancelled = true
      event.reason = Lang.format('err.login.sameId')
    }
    user.sendEvent('assigned_guest_id', { id: user.id, name: user.name })
    this._app.logger.config(Lang.format('form.user.login', [user.name, user.id]))

    event.user = user

    this._app.logger.config(Lang.format('form.user.list', [ServerManager.version, userManager.getUsers().length]))
  }
}

module.exports = SocketConnectionEventExecutor
