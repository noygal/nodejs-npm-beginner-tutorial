const http = require('http')

// create a server object
const server = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'text/plain; charset=utf-8') // setting header
  res.write(`hello world 👋 👋 👋\n`) // write a response to the client
  res.write(`Url: ${req.url}, Method: ${req.method}`) // continue to write response
  res.end() //end the response
})

server.listen(3000) //the server object listens on port 3000
