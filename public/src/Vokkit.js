const Client = require('./Client.js')
const Lang = require('./lang/Lang')

let _client

class Vokkit {
  static init () {
    Lang.setLanguage(navigator.language.substring(0, 2))
    _client = new Client()
  }

  static getClient () {
    return _client
  }
}

module.exports = Vokkit
