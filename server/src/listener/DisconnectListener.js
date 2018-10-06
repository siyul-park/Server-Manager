const SocketDisconnectionEvent = require('../event/socket/SocketDisconnectionEvent')
const Listener = require('./Listener')

class DisconnectListener extends Listener {
  addListener (socket) {
    const app = this._app

    socket.on('disconnect', function (data) {
      let socketDisconnectionEvent = new SocketDisconnectionEvent(socket)
      app.eventManager.extuteEvent(socketDisconnectionEvent)
    })
  }
}

module.exports = DisconnectListener
