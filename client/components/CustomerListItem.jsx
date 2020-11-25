import React from 'react'

function CustomerListItem (props) {
  console.log('CustomerListItem Props:', props)
  return (
    <li className='customer-list-item'>
      {`${props.customer.full_name} `}
      <a href='#' onClick={() => props.showDetails(props.customer)}>details</a>
    </li>
  )
}

export default CustomerListItem