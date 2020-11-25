const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)

module.exports = {
    getAllCustomers,
    addCustomer
}

function getAllCustomers (db = connection) {
  return db('Customers').select()
}

function addCustomer (customer, db = connection) {
  return db('Customers').insert(customer)
}
