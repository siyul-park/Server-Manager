const SocketConnectionEvent = require('../event/socket/SocketConnectionEvent')
const Listenr = require('./Listner')

class ConnectListner extends Listenr {
  addListener (socket) {
    let socketConnectionEvent = new SocketConnectionEvent(socket)
    this._app.eventManager.extuteEvent(socketConnectionEvent)
  }
}

module.exports = ConnectListner
