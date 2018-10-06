const EventExecuter = require('../EventExecuter')
const Lang = require('../../lang/Lang')

class UserLoginEventExecuter extends EventExecuter {
  constructor (app) {
    super(app)
    this._eventName = 'UserLoginEvent'
  }

  excute (event) {
    let user = event.user

    if (user.name.length === 0) {
      event.cancelled = true
      event.reason = Lang.format('err.login.emptyId')
    } else if (event.user.name.length >= 20) {
      event.cancelled = true
      event.reason = Lang.format('err.login.longId')
    }

    let userList = this._app.serverManager.getUsers()
    for (let i in userList) {
      if (userList[i].name === user.name) {
        event.cancelled = true
        event.reason = Lang.format('err.login.sameId')
      }
    }

    let logger = this._app._logger
    if (event.cancelled) {
      logger.warning(event.reason)
      return
    }

    let serverManager = this._app.serverManager
    serverManager.addUser(user)
    logger.info(Lang.format('msg.player.login', [user.name, event.address.address, event.address.port]))
  }
}

module.exports = UserLoginEventExecuter
