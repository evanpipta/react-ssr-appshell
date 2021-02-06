import './config'
import express from 'express'
import React from 'react'
import ReactDOMServer from 'react-dom/server'

import App from './components/app'
import Template from './components/server/template'

const bundleFilename = '/public/bundle.js'

const server = express()

server.get('/', (req, res, next) => {
  const html = ReactDOMServer.renderToString(
    <Template
      jsBundle={bundleFilename}
      title="My App"
      description="My app description"
    >
      <App />
    </Template>
  )
  res.send(html)
})

server.use(express.static('public'))

const port = process.env.PORT || 3000

server.listen(port, () => {
  if (process.env.NODE_ENV === 'development') {
    console.log(`\nServer listening at http://localhost:${port}/\n`)
  }
})
