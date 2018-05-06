const EventsSample = require('./src/events-sample')
const emmiter = new EventsSample()

emmiter.on('begin', () => console.log('begin process'))
emmiter.on('data', data => console.log('new data: \n', data))
emmiter.on('end', () => console.log('the process has ended'))
emmiter.on('error', error => console.log('error is: ', error))

emmiter.startProcess()
