exports.seed = knex => {
  // Deletes ALL existing entries
  return knex('Customers').del()
    .then(() => {
      // Inserts seed entries
      return knex('Customers').insert([
        {id: 1, full_name: 'Alfreds Futterkiste', country: 'Germany'},
        {id: 2, full_name: 'Madelaine Maynard', country: 'Malta'},
        {id: 3, full_name: 'Yash Hopper', country: 'Canada'},
        {id: 4, full_name: 'Lena Carpenter', country: 'Ukraine'},
        {id: 5, full_name: 'Jaeden Bush', country: 'United States of America'},
      ])
    })
}
