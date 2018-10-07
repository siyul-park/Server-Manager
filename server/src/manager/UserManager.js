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

  getUserById (id) {
    for (let i in this._userList) {
      if (this._userList[i].id === id) {
        return this._userList[i]
      }
    }

    return null
  }

  getUserBySocket (socket) {
    for (let i in this._userList) {
      if (this._userList[i].socket === socket) {
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
