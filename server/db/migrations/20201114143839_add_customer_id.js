exports.up = knex => {
    return knex.schema.table('Orders', table => {
      table.integer('customer_id')
    })
  }
  
  exports.down = knex => {
    return knex.schema.table('Orders', table => {
      table.dropColumn('customer_id')
    })
  }
