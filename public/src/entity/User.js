const Entity = require('./Entity.js')

class User extends Entity {
  constructor (id, name) {
    super(id)

    this._name = name
  }

  get name () {
    return this._name
  }

  set name (name) {
    this._name = name
  }

  toObject () {
    return {
      name: this._name,
      id: this._id
    }
  }

  static fromObject (object) {
    return new User(object.id, object.name)
  }
}

module.exports = User
