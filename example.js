'use strict'

const http = require('http')
const server = http.createServer((req, res) => {
  console.log(req.method, req.url)
  res.end()
})

server.listen(run)

let count = 0
function run() {
  const url = `http://localhost:${server.address().port}/biscuits`
  setTimeout(() => {
    http.get(url, (res) => {
      console.log('got response', res.statusCode)
      if (count++ === 2) return server.close()
      run()
    })
  }, 250)
}
