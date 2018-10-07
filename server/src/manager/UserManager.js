const Manager = require('./Manager')

class UserManager extends Manager {
  init (args = {}) {
    this._userList = []
    this._guestNumber = 0
  }

  evaluateUser (user) {
    let eventManager = this._app.eventManager
    let events = eventManager._registeredEvent

    let socket = user.socket
    let args = { socket: socket }

    events.forEach(element => {
      if (user.grade >= element.grade && !!element.Event.eventName) {
        socket.on(element.Event.eventName, function (data) {
          Object.assign(args, data)
          eventManager.extuteEvent(new element.Event(args))
        })
      }
    })
  }

  get guestNumber () {
    return this._guestNumber
  }

  getUser (name) {
    for (let i in this._userList) {
      if (this._userList[i].getName() === name) {
        return this._userList[i]
      }
    }

    return null
  }

  addUser (user) {
    for (let i in this._userList) {
      if (this._userList[i].id === user.id) {
        return false
      }
    }
    this._userList.push(user)
    return true
  }

  removeUser (user) {
    for (let i in this._userList) {
      if (this._userList[i].id === user.id) {
        this._userList.splice(i, 1)
        return
      }
    }
  }

  getUserByID (id) {
    for (let i in this._userList) {
      if (this._userList[i].id === id) {
        return this._userList[i]
      }
    }

    return null
  }

  getUserBySocketID (socketid) {
    for (let i in this._userList) {
      if (this._userList[i].socket.id === socketid) {
        return this._userList[i]
      }
    }

    return null
  }

  getUsers () {
    return this._userList.slice()
  }

  // Grade
  static get GRADE () {
    return {
      GUEST: 1,
      USER: 2,
      ADMINISTRATOR: 3
    }
  }

  destroy () {
  }
}

module.exports = UserManager
