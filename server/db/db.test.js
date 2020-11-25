const knex = require('knex')
const config = require('./knexfile').test
const testDB = knex(config)

const {
    getAllCustomers,
    getCustomerById,
    addCustomer,
    delCustomer,
    editCustomer
} = require('./db')

test('We all good mate?', () => {
    expect(true).toBeTruthy()
})

beforeAll(() => {
    return testDB.migrate.latest()
})

beforeEach(() => {
    return testDB.seed.run()
})

beforeAll(() => {
    return testDB.destroy()
})

test('getAllCustomers returns the correct number of customers', () => {
    return getAllCustomers(testDB)
    .then(customers => {
        return expect(customers).toHaveLength(5)
    })
})