import React from 'react'

function CustomerListItem (props) {
  console.log('CustomerListItem Props:', props)
  return (
    <li className='customer-list-item'>
      <p>
        {`${props.customer.full_name} `}
        <a href='#' onClick={() => props.showDetails(props.customer)}>details</a>
      </p>
    </li>
  )
}

export default CustomerListItem