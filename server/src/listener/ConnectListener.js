const SocketConnectionEvent = require('../event/socket/SocketConnectionEvent')
const Listener = require('./Listener')

class ConnectListener extends Listener {
  addListener (socket) {
    let socketConnectionEvent = new SocketConnectionEvent(socket)
    this._app.eventManager.extuteEvent(socketConnectionEvent)
  }
}

module.exports = ConnectListener
