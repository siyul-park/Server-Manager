const Server = require('./Server.js')
const Lang = require('./lang/Lang')
const fs = require('fs')

let _server

class Vokkit {
  static init () {
    if (!fs.existsSync('./server.properties')) {
      fs.writeFileSync('./server.properties', JSON.stringify({
        language: 'en'
      }))
    }

    const properties = JSON.parse(fs.readFileSync('./server.properties'))
    Lang.setLanguage(properties.language)

    _server = new Server()
  }

  static getServer () {
    return _server
  }
}

module.exports = Vokkit
