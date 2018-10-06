const Entity = require('./Entity.js')

class User extends Entity {
  constructor (id, name, socket) {
    super(id)

    this._name = name
    this._socket = socket
  }

  get name () {
    return this._name
  }

  get socket () {
    return this._socket
  }

  get address () {
    return this._socket.request.connection._peername.address
  }

  get port () {
    return this._socket.request.connection._peername.port
  }

  set name (name) {
    this._name = name
  }

  set socket (socket) {
    this._socket = socket
  }

  sendMessage (message) {
    this._socket.emit('chat', {
      id: this._id,
      message: message.toString()
    })
  }

  toObject () {
    return {
      name: this._name,

      id: this._id
    }
  }

  static fromObject (object, socket) {
    return new User(object.id, object.name, socket)
  }
}

module.exports = User
