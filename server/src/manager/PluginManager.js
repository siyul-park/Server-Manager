const Manager = require('./Manager')

const fs = require('fs')
const path = require('path')
const webpack = require('webpack')
const webpackConfig = require('../../../webpack.config')

const Lang = require('../lang/Lang')

class PluginManager extends Manager {
  init (args) {
    this._registeredEvents = []
    this._pluginPath = path.resolve('', args.pluginPath || 'plugin')
    this._clientPath = path.resolve('', args.clientPath || 'public')
    this._plugins = []
    this._clientPlugins = []
  }

  loadPlugin (name) {
    if (!fs.existsSync(this._pluginPath + '/' + name + '/manifest.json')) return

    let manifest = JSON.parse(fs.readFileSync(this._pluginPath + '/' + name + '/manifest.json', 'utf-8'))
    this._logger.info(Lang.format('msg.plugin.loading', [manifest.name, manifest.version]))

    try {
      let serverPlugin = new (require(this._pluginPath + '/' + manifest.name + '/' + manifest['server-plugin'] + '/' + manifest['server-main']))(this._app)

      this._plugins.push({
        plugin: serverPlugin,
        manifest: manifest
      })

      this._clientPlugins.push({
        path: this._pluginPath + '/' + manifest.name + '/' + manifest['client-plugin'] + '/' + manifest['client-main'],
        name: manifest.name
      })

      serverPlugin.onLoad()

      this._logger.fine(Lang.format('msg.plugin.load.succeed', [manifest.name, manifest.version]))
    } catch (e) {
      this._logger.warn(Lang.format('msg.plugin.load.fail', [manifest.name, manifest.version]))
      this._logger.warn(e.stack)
    }
  }

  loadPlugins () {
    let files = fs.readdirSync(this._pluginPath)

    for (let i in files) {
      this.loadPlugin(files[i])
    }
  }

  enablePlugins () {
    let logger = this._logger
    let clientPath = this._clientPath
    let clientPlugins = this._clientPlugins
    let plugins = this._plugins

    const promise = new Promise((resolve, reject) => {
      logger.info(Lang.format('msg.client.building'))

      let pluginManagerPath = clientPath + '/src/manager/PluginManager.js'

      if (!fs.existsSync(pluginManagerPath)) {
        throw Error(Lang.format('msg.plugin.compile.first'))
      }

      let source = [
        'const Manager = require(\'./Manager\')',
        '',
        'class PluginManager extends Manager {',
        '  init (args) {',
        '    this._plugins = []',
        '  }',
        '',
        '  load () {',
        '    this._loadedPlugins = {',
        '    }',
        '    for (let i in this._loadedPlugins) {',
        '      let plugin = new (this._loadedPlugins[i])(this._app)',
        '      plugin.onLoad()',
        '      this._plugins.push({',
        '        name: i,',
        '        plugin: plugin',
        '      })',
        '    }',
        '  }',
        '',
        '  enable () {',
        '    for (let i in this.plugins) {',
        '      this._plugins[i].plugin.onEnable()',
        '    }',
        '  }',
        '}',
        '',
        'module.exports = PluginManager',
        ''
      ]

      let inject = []

      for (let i in clientPlugins) {
        inject.push(clientPlugins[i].name + ': require(\'' + clientPlugins[i].path + '\')')
      }

      source.splice(9, 0, inject.join(',\n'))
      fs.writeFileSync(pluginManagerPath, source.join('\n'))

      webpack(webpackConfig, (err, stats) => {
        if (err || stats.hasErrors()) {
          logger.warning(Lang.format('msg.client.build.fail'))

          reject(new Error(stats.toString()))
        } else {
          logger.info(Lang.format('msg.client.build.succeed'))
        }
        resolve()
      })

      for (let i in this.plugins) {
        logger.info(Lang.format('msg.plugin.enabling', [plugins[i].manifest.name, plugins[i].manifest.version]))
        try {
          this.plugins[i].plugin.onEnable()
        } catch (e) {
          logger.warning(Lang.format('msg.plugin.enable.fail', [plugins[i].manifest.name, plugins[i].manifest.version]))
        }
        logger.info(Lang.format('msg.plugin.enable.succeed', [plugins[i].manifest.name, plugins[i].manifest.version]))
      }
    })

    return promise
  }
}

module.exports = PluginManager
