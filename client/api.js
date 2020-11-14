import request from 'superagent'

const customersUrl = 'http://localhost:3000/api/v1/route'

export function getCustomers () {
  return request
    .get(customersUrl)
    .then(response => response.body)
}