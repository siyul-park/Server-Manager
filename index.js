const Application = require('./server/src/Application.js')
const Lang = require('./server/src/lang/Lang')

function testing () {
  Lang.setLanguage('en')

  let app = new Application()

  app.destroyer()
}

testing()
