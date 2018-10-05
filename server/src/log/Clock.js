class Clock {
  constructor () {
    this._hour = Clock.getDate().getHours()
    this._min = Clock.getDate().getMinutes()
    this._sec = Clock.getDate().getSeconds()

    this._time = Clock.getDate().getTime()
  }

  update () {
    this._hour = Clock.getDate().getHours()
    this._min = Clock.getDate().getMinutes()
    this._sec = Clock.getDate().getSeconds()

    this._time = Clock.getDate().getTime()
  }

  get hours () {
    return (this._hour < 10 ? '0' : '') + this._hour
  }

  get minutes () {
    return (this._min < 10 ? '0' : '') + this._min
  }

  get seconds () {
    return (this._sec < 10 ? '0' : '') + this._sec
  }

  get time () {
    return this.hours + ':' + this.minutes + ':' + this.seconds
  }

  deltaTimeToString (clock) {
    let deltaHour = this._hour - clock._hour
    let deltaMin = this._min - clock._min
    let deltasec = this._sec - clock._sec

    return ((deltaHour < 10 ? '0' : '') + deltaHour) + ':' +
      ((deltaMin < 10 ? '0' : '') + deltaMin) + ':' +
      ((deltasec < 10 ? '0' : '') + deltasec)
  }

  deltaTime (clock) {
    return this.time - clock.time
  }

  static getDate () {
    const date = new Date()

    return date
  }
}

module.exports = Clock
