const User = require('../entity/User')

const Listener = require('./Listener')

const UserLoginEvent = require('../event/user/UserLoginEvent')
const UserJoinEvent = require('../event/user/UserJoinEvent')

const Lang = require('../lang/Lang')

class LoginListener extends Listener {
  addListener (socket) {
    let app = this._app

    socket.on('login', function (data) {
      let user = new User(socket.id, data.name, socket)
      let address = socket.request.connection._peername

      let userLoginEvent = new UserLoginEvent(user, address)
      app.eventManager.extuteEvent(userLoginEvent)

      if (userLoginEvent.isCancelled()) {
        socket.emit('loginResult', {
          succeed: false,
          reason: userLoginEvent.reason
        })
        return
      }

      let userJoinEvent = new UserJoinEvent(user, Lang.format('form.user.login'))
      app.eventManager.extuteEvent(userJoinEvent)
    })
  }
}

module.exports = LoginListener
