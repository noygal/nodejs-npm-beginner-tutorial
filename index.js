const http = require('http')
const path = require('path')
const fs = require('fs')

const port = process.env.PORT || 3000
const publicPath = process.env.PUBLIC_PATH || './public'

const publicBasePath = path.join(__dirname, publicPath)

const helloListener = (req, res) => {
  res.setHeader('Content-Type', 'text/plain; charset=utf-8') // setting header
  res.write(`hello world 👋 👋 👋\n`) // write a response to the client
  res.write(`Url: ${req.url}, Method: ${req.method}`) // continue to write response
  res.end() //end the response
}


const publicListener = (req, res) => {
  const file = path.join(publicBasePath, req.url) // joining path
  if (!fs.existsSync(file)) {
    res.statusCode = 404 // Not Found HTTP code
    return res.end('Not Found')
  }
  // creating a file stream and pipe it as the response
  fs.createReadStream(file).pipe(res)
}

const server = http.createServer(publicListener)

server.listen(port, err => err
  ? console.error(`Could not launch server error: `, err)
  : console.log(`Serving static folder: ${publicBasePath}, on: http://localhost:${port}`)
)


