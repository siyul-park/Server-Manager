const Entity = require('./Entity.js')

class User extends Entity {
  constructor (id, name, grade, socket) {
    super(id)

    this._name = name
    this._grade = grade
    this._socket = socket
  }

  get name () {
    return this._name
  }

  get socket () {
    return this._socket
  }

  get grade () {
    return this._grade
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
    this.sendEvent('msg_to_client', {
      id: this._id,
      message: message.toString()
    })
  }

  sendEvent (name, args = {}) {
    this._socket.emit(name, args)
  }

  toObject () {
    return {
      name: this._name,
      id: this._id,
      grade: this._grade
    }
  }

  static fromObject (object, socket) {
    return new User(object.id, object.name, object.grade, socket)
  }
}

module.exports = User
