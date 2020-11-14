import React from 'react'

import ErrorMessage from './ErrorMessage'
import CustomerList from './CustomerList'

import { getCustomers } from '../api'

export default class Home extends React.Component {
  state = {
    error: null,
    customers: [],
    activeCustomer: null,
    detailsVisible: false,
  }

  componentDidMount () {
    this.refreshList()
  }

  renderCustomers = (customers) => {
    this.setState({
      error: null,
      customers: customers
    })
  }

  renderError = (err) => {
    this.setState({
      error: err,
      customers: []
    })
  }

  refreshList = (err) => {
    this.setState({
      error: err
    })

    getCustomers()
      .then((customers) => {
        this.renderCustomers(customers)
      })
      .catch((err) => {
        this.renderError(err)
      })
  }

  showDetails = (customer) => {
    this.setState({
      activeCustomer: customer,
      detailsVisible: true
    })
  }

  hideDetails = () => {
    this.setState({
      detailsVisible: false
    })
  }

  render () {
    console.log('showDetails fn():', this.showDetails)
    return (
      <div>
        <ErrorMessage error={this.state.error} />

        <h1>Customers</h1>

        <CustomerList
          showDetails={this.showDetails}
          customers={this.state.customers} />

        {this.state.detailsVisible && <CustomerDetails
          isVisible={this.state.detailsVisible}
          hideDetails={this.hideDetails}
          customer={this.state.activeCustomer} />}
      </div>
    )
  }
}