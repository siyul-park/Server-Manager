const readline = require('readline')
const Manager = require('./Manager')

class ConsoleManager extends Manager {
  init () {
    let rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    })

    rl.setPrompt('> ')
    rl.prompt(true)
    rl.on('line', function (line) {
      this.input(line)
      rl.prompt()
    }).on('close', function () {
      process.exit(0)
    })
  }

  input (input) {
    
  }
}

module.exports = ConsoleManager
