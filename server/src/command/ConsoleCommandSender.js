const CommandSender = require('./CommandSender.js')

class ConsoleCommandSender extends CommandSender {
  constructor (server) {
    super(server)
    this._name = 'console'
  }

  get name () {
    return this._name
  }

  sendMessage (message) {
    this._server.logger.chat(message)
  }

  broadcast (message) {
    this._server.logger.chat(message)
    this._server.getChatManager().broadcast(message)
  }
}

module.exports = ConsoleCommandSender
