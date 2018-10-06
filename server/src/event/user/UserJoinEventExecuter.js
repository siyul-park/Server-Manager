const EventExecuter = require('../EventExecuter')

const ServerManager = require('../../manager/ServerManager')
const Lang = require('../../lang/Lang')

class UserJoinEventExecuter extends EventExecuter {
  constructor (app) {
    super(app)
    this._eventName = 'UserJoinEvent'
  }

  excute (event) {
    let sendUsers = []
    let userList = this._app.serverManager.getUsers()

    for (let i in userList) {
      sendUsers.push(userList[i].toObject())
    }
    sendUsers.push(event.user.toObject())

    this._app.serverManager.socketServer.emit('loginResult', {
      succeed: true,
      Users: sendUsers
    })
    this._app.serverManager.socketServer.emit('userJoin', event.user.toObject())

    this._app._logger.config(Lang.format('form.user.list', [ServerManager.version, this._app.serverManager.getUsers().length]))
  }
}

module.exports = UserJoinEventExecuter
