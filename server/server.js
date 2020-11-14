const path = require('path')

const cors = require('cors')
const express = require('express')

const route = require('./routes/route')

const server = express()

server.use(express.json())
server.use(cors({ origin: 'http://localhost:8080' }))
server.use(express.static(path.join(__dirname, 'public')))

server.use('/api/v1/route', route)
server.use('/api/v1/*', (req, res) => res.sendStatus(404))

module.exports = server