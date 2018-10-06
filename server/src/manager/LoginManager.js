const User = require('../entity/User')

const UserLoginEvent = require('../event/user/UserLoginEvent')
const UserJoinEvent = require('../event/user/UserJoinEvent')
const ServerManager = require('../manager/ServerManager')

const SocketManager = require('./SocketManager.js')
const Lang = require('../lang/Lang')

class LoginManager extends SocketManager {
  addListener (socket) {
    let app = this._app
    let logger = this._logger

    socket.on('login', function (data) {
      let user = new User(socket.id, data.name, socket)
      let address = socket.request.connection._peername

      let userLoginEvent = new UserLoginEvent(user, address.address)
      app.eventManager.extuteEvent(userLoginEvent)

      if (userLoginEvent.isCancelled()) {
        socket.emit('loginResult', {
          succeed: false,
          reason: userLoginEvent.reason
        })
        return
      }

      let sendUsers = []
      let userList = this._app.SocketManager.getUsers()
      for (let i in userList) {
        sendUsers.push(userList[i].toObject())
      }

      sendUsers.push(user.toObject())
      socket.emit('loginResult', {
        succeed: true,
        Users: sendUsers
      })

      let userJoinEvent = new UserJoinEvent(user, Lang.format('form.user.login'))
      app.eventManager.extuteEvent(userJoinEvent)
      
      logger.config(Lang.format('form.user.list'), [ServerManager.version, app.serverManager.getUsers().length])
    })
  }
}

module.exports = LoginManager
