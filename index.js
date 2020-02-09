const express = require('express')
const path = require('path')

const publicPath = process.env.PUBLIC_PATH || './public'
const port = process.env.PORT || 3000

const publicBasePath = path.join(__dirname, publicPath)

const app = express();

app.use(express.static(publicBasePath))

app.listen(port, err => err
  ? console.error(`Could not launch server error: `, err)
  : console.log(`Serving static folder: ${publicBasePath}, on: http://localhost:${port}`)
)
