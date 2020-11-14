import request from 'superagent'

const customersUrl = 'http://localhost:3000/api/v1/customers'

export function getCustomers () {
  return request
    .get(customersUrl)
    .then(response => response.body)
}