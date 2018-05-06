const EventEmitter = require('events')
const request = require('./request')

class EventsSample extends EventEmitter {
  async startProcess() {
    this.emit('begin')
    try {
      const result = await request()
      this.emit('data', result.data)
      this.emit('end')
    } catch (error) {
      this.emit('error', error)
    }
  }
}

module.exports = EventsSample
