const Manager = require('./Manager')

class UserManager extends Manager {
  init (args = {}) {
    this._userList = []
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

  sendMessage (user, message) {
    let eventManager = this._app.eventManager
    eventManager.sendEvent('msg_to_client', {
      id: user.id,
      message: message.toString()
    })
  }

  destroy () {
  }
}

module.exports = UserManager
