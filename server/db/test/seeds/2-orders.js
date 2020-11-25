exports.seed = knex => {
  // Deletes ALL existing entries
  return knex('Orders').del()
    .then(() => {
      // Inserts seed entries
      return knex('Orders').insert([
        {id: 7011, customer_id: 1, order_date: '2020-10-27'},
        {id: 7012, customer_id: 2, order_date: '2020-10-27'},
        {id: 7013, customer_id: 3, order_date: '2020-10-28'},
        {id: 7014, customer_id: 4, order_date: '2020-10-26'},
        {id: 7015, customer_id: 5, order_date: '2020-10-27'}
      ])
    })
}
