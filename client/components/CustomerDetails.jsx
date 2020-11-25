import React from 'react'

export default function CustomerDetails (props) {
  // console.log('Customer Details Props:', props)
  const {customer, isVisible, hideDetails} = props
  const classes = 'customer-details ' + (isVisible ? 'visible' : 'hidden')

  return (
    <div className={classes}>
      <h2>Details</h2>
      <p>Name: {customer.full_name}</p>
      <p>Country: {customer.country}</p>
      <a href='#' onClick={hideDetails}>Close</a>
    </div>
  )
}