const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)

module.exports = {
  getAllObjects
}

function getAllObjects (db = connection) {
  return db('object').select()
}