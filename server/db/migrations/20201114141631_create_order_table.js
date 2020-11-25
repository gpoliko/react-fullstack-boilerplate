exports.up = knex => {
    return knex.schema.createTable('Orders', table => {
      table.increments('id').primary()
      table.date('order_date')
    })
  }
  
exports.down = knex => {
  return knex.schema.dropTable('Orders')
}
