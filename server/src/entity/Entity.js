class Entity {
  constructor (id) {
    this._id = id
  }

  get id () {
    return this._id
  }

  equals (object) {
    return object instanceof this.constructor && object.getId() === this.getId()
  }
}

module.exports = Entity
