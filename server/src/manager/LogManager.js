const Lang = require('../lang/Lang')
const { Logger, ConsoleHandel, FileHandel, LEVEL } = require('../log/Logger')

class LogManager {
  constructor (app, name) {
    this._app = app
    this._name = name || Lang.format('name.manager.log')

    this._consoleHandel = []
    this._fileHandel = []

    this._logger = []

    this.init()
  }

  init () {
    let logger = new Logger(Lang.format('name.logger.default'))

    let consoleHandel = new ConsoleHandel()
    let fileALLHandel = new FileHandel('[ALL] ')
    let fileInfoHandel = new FileHandel('[INFO] ')
    let fileWarnHandel = new FileHandel('[WARN] ')
    let fileConfigHandel = new FileHandel('[CONFIG] ')
    let fileFineHandel = new FileHandel('[FINE] ')

    logger.level = LEVEL.ALL

    consoleHandel.level = LEVEL.ALL
    fileALLHandel.level = LEVEL.ALL
    fileInfoHandel.level = LEVEL.INFO
    fileWarnHandel.level = LEVEL.WARNING
    fileConfigHandel.level = LEVEL.CONFIG
    fileFineHandel.level = LEVEL.FINE | LEVEL.FINER | LEVEL.FINEST

    this.addConsoleHandel(consoleHandel)
      .addFileHandel(fileALLHandel)
      .addFileHandel(fileInfoHandel)
      .addFileHandel(fileWarnHandel)
      .addFileHandel(fileConfigHandel)
      .addFileHandel(fileFineHandel)
      .addLogger(logger)

    logger.fine(Lang.format('msg.created', [logger.name]))
  }

  addLogger (logger) {
    this._consoleHandel.forEach(element => {
      logger.addHandler(element)
    })
    this._fileHandel.forEach(element => {
      logger.addHandler(element)
    })

    this._logger.push(logger)

    return this
  }
  addConsoleHandel (handel) {
    this._consoleHandel.push(handel)

    return this
  }
  addFileHandel (handel) {
    this._consoleHandel.push(handel)

    return this
  }

  getConsoleHandel (level) {
    for (let i = 0; i < this._consoleHandel.length; ++i) {
      if (this._consoleHandel[i].level === level) return this._consoleHandel[i]
    }

    return false
  }
  getFileHandel (level) {
    for (let i = 0; i < this._fileHandel.length; ++i) {
      if (this._fileHandel[i].level === level) return this._fileHandel[i]
    }
    return false
  }
  getLogger (level) {
    for (let i = 0; i < this._logger.length; ++i) {
      if (this._logger[i].level === level) return this._logger[i]
    }

    return false
  }
  getLoggerByname (name) {
    for (let i = 0; i < this._logger.length; ++i) {
      if (this._logger[i].name === name) return this._logger[i]
    }

    return false
  }

  destroyer () {
    this.getLogger(LEVEL.ALL).info(Lang.format('msg.destroying', [this._name]))
    this.destroy()
    // 밑에 있는 명령은 실행이 완전하지 않음 (콘솔을 제외한 모든 핸들이 이미 소멸된 상태)
    this.getLogger(LEVEL.ALL).fine(Lang.format('msg.destroyed', [this._name]))
  }

  destroy () {
    this._consoleHandel.forEach(element => {
      element.close()
    })
    this._fileHandel.forEach(element => {
      element.close()
    })
  }
}

module.exports = LogManager
