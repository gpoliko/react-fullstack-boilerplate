exports.seed = knex => {
  const empty = table =>
    () => knex(table).del()

  return empty('Customers')()
    .then(empty('Orders'))
}
