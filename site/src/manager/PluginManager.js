const Manager = require('./Manager')

class PluginManager extends Manager {
  init (args) {
    this._plugins = []
  }

  load () {
    this._loadedPlugins = {

    }
    for (let i in this.loadedPlugins) {
      let plugin = new (this._loadedPlugins[i])(this._app)
      plugin.onLoad()
      this._plugins.push({
        name: i,
        plugin: plugin
      })
    }
  }

  enable () {
    for (let i in this.plugins) {
      this._plugins[i].plugin.onEnable()
    }
  }
}

module.exports = PluginManager
