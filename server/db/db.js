const knex = require('knex')
const config = require('./knexfile').development
const connection = knex(config)

module.exports = {
    getAllCustomers,
    getCustomerById,
    addCustomer,
    delCustomer,
    editCustomer
}

function getAllCustomers (db = connection) {
  return db('Customers').select()
}

function getCustomerById (id, db = connection) {
  return db('Customers').select().where('id', id)
}

function addCustomer (newCustomer, db = connection) {
  return db('Customers').insert(newCustomer)
}

function delCustomer (id, db = connection) {
  return db('Customers').delete().where('Customers.id', id)
}

function editCustomer (id, edit, db = connection) {
  return db('Customers').update(edit).where('Customers.id', id)
}
