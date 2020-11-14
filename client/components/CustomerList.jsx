import React from 'react'

import CustomerListItem from './CustomerListItem'

export default function CustomerList (props) {
    console.log('Customer List Props:', props)
  return (
    <div className='customer-list'>
      <h2>List</h2>
      <ul>
      {props.customers.map(customer => {
        return <CustomerListItem
          key={customer.id}
          customer={customer}
          hideDetails={props.hideDetails}
          showDetails={props.showDetails} />
      })}
      </ul>
    </div>
  )
}