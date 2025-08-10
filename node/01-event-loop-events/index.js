const fs = require('fs')
const dns = require('dns')
const { time, timeStamp } = require('console')

function timestamp(){
  return performance.now().toFixed(2)
}


console.log('Program start', timestamp())



//Close events
fs.writeFile('./test.txt', 'Hello Node.js', () => console.log('File written', timestamp()))

//Promises
Promise.resolve().then(() => console.log('Promise 1', timestamp()))

//Next tick
process.nextTick(() => console.log('nextTick 1', timestamp()))

//Set immidiate (Check)
setImmediate(() => console.log('Imidiate 1', timestamp()))

//Timeouts
setTimeout(() => {
  console.log('Timeout 1', timestamp())
}, 0)

setTimeout(() => {
  process.nextTick(() => console.log('nextStick 2', timestamp()))

  console.log('Timeout 2', timestamp())
}, 10)

// I/O Events
dns.lookup('localhost', (err, address, family) => {
  console.log('DNS 1 localhost', address, timestamp())
  Promise.resolve().then(() => console.log ('Promise 2', timestamp()))
  process.nextTick(() => console.log('nextTick 3', timestamp()))
})

console.log('Program end', timestamp())