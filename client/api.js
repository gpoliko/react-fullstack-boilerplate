import request from 'superagent'

const routeURL = 'http://localhost:3000/api/v1/route'

export function getCustomers () {
  return request
    .get(routeURL)
    .then(response => response.body)
}