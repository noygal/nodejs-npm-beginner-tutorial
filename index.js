const http = require('http')
const path = require('path')
const { publicListener } = require('./src/listeners')

const publicPath = process.env.PUBLIC_PATH || './public'
const port = process.env.PORT || 3000

const publicBasePath = path.join(__dirname, publicPath)

const server = http.createServer(publicListener(publicBasePath))

server.listen(port, err => err
  ? console.error(`Could not launch server error: `, err)
  : console.log(`Serving static folder: ${publicBasePath}, on: http://localhost:${port}`)
)
