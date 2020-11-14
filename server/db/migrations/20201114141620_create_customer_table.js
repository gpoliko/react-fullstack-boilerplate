exports.up = knex => {
    return knex.schema.createTable('Customers', table => {
      table.increments('id').primary()
      table.string('full_name')
      table.string('country')
    })
  }
  
  exports.down = knex => {
    return knex.schema.dropTable('Customers')
  }
