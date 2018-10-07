class CommandSender {
  constructor (server) {
    this._server = server
  }

  sendMessage () {

  }

  get name () {
    return ''
  }

  get server () {
    return this._server
  }
}

module.exports = CommandSender
