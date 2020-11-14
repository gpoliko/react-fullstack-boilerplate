const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)

module.exports = {
    getAllCustomers
}

function getAllCustomers (db = connection) {
  return db('Customers').select()
}