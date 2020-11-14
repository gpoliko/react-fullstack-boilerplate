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
        {id: 7015, customer_id: 5, order_date: '2020-10-27'},
        {id: 7016, customer_id: 1, order_date: '2020-10-29'},
        {id: 7017, customer_id: 2, order_date: '2020-10-30'},
        {id: 7018, customer_id: 3, order_date: '2020-10-31'},
        {id: 7019, customer_id: 4, order_date: '2020-10-31'},
        {id: 7020, customer_id: 5, order_date: '2020-10-30'},
        {id: 7021, customer_id: 1, order_date: '2020-10-29'},
        {id: 7022, customer_id: 2, order_date: '2020-11-01'},
        {id: 7023, customer_id: 3, order_date: '2020-11-01'},
        {id: 7024, customer_id: 4, order_date: '2020-11-01'},
        {id: 7025, customer_id: 5, order_date: '2020-11-02'},
        {id: 7026, customer_id: 1, order_date: '2020-11-02'},
        {id: 7027, customer_id: 3, order_date: '2020-11-03'},
        {id: 7028, customer_id: 4, order_date: '2020-11-04'},
        {id: 7029, customer_id: 1, order_date: '2020-11-04'},
        {id: 7030, customer_id: 3, order_date: '2020-11-04'}
      ])
    })
}
