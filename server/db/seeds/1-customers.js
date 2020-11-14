exports.seed = knex => {
  // Deletes ALL existing entries
  return knex('Customers').del()
    .then(() => {
      // Inserts seed entries
      return knex('Customers').insert([
        {id: 1, full_name: 'Alfreds Futterkiste', phone: 9954122259, country: 'Germany'},
        {id: 2, full_name: 'Madelaine Maynard', phone: 8995920575, country: 'Malta'},
        {id: 3, full_name: 'Yash Hopper', phone: 2882911894, country: 'Canada'},
        {id: 4, full_name: 'Lena Carpenter', phone: 2508376713, country: 'Ukraine'},
        {id: 5, full_name: 'Jaeden Bush', phone: 4438597747, country: 'United States of America'},
      ])
    })
}
