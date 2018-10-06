const Lang = require('../lang/Lang')
const readline = require('readline')
const Manager = require('./Manager')

class ConsoleManager extends Manager {
  init (args = {}) {
    this.prompForm = Lang.format('form.promp')

    let rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    })

    rl.setPrompt(this.prompForm)
    rl.prompt(true)

    const input = this.input
    const app = this._app
    const destroyer = app.destroyer
    rl.on('line', function (line) {
      input(line)
      rl.prompt()
    }).on('close', function () {
      destroyer.call(app)
      // process.exit(0)
    })
  }

  input (input) {
  }
}

module.exports = ConsoleManager
