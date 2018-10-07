const Manager = require('./Manager')

const ScreenProvider = require('../ui/ScreenProvider.js')
const ScreenChooser = require('../ui/ScreenChooser.js')

const MainScreen = require('../ui/screens/MainScreen.js')

class ScreenManager extends Manager {
  init (args) { // register screens
    this.screenProvider = new ScreenProvider()
    this.screenChooser = new ScreenChooser(this.screenProvider)

    this.screenProvider.register(new MainScreen())
  }

  getScreen (screenName) {
    return this.screenChooser.getScreen(screenName)
  }

  getNowScreen () {
    return this.screenChooser.getNowScreen()
  }

  addScreen (screenName) {
    this.screenChooser.setScreen(screenName)
  }

  getScreenProvider () {
    return this.screenProvider
  }

  getScreenChooser () {
    return this.screenChooser
  }
}

module.exports = ScreenManager
