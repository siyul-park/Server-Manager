const CommandSender = require('./CommandSender.js')

class UserCommandSender extends CommandSender {
  constructor (server, user) {
    super(server)
    this._user = user
  }

  sendMessage (message) {
    this._user.sendMessage(message)
  }

  broadcast (message) {
    this._server.getChatManager().broadcast(message)
  }

  get name () {
    return this._user.name
  }

  getPlayer () {
    return this.player
  }
}

module.exports = UserCommandSender
