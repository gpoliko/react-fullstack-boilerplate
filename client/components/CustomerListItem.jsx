import React from 'react'

export default function CUstomerListItem ({ customer, showDetails }) {
  return (
    <li className='customer-list-item'>
      {`${customer.name} `}
      <a href='#' onClick={() => showDetails(customer)}>details</a>
    </li>
  )
}