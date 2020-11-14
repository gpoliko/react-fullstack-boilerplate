
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('table_name').del()
    .then(function () {
      // Inserts seed entries
      return knex('table_name').insert([
        {id: 1, full_name: 'Alfreds Futterkiste', phone: 0211234567, country: 'Germany'},
        {id: 2, full_name: 'Madelaine Maynard', phone: 0211234567, country: 'Malta'},
        {id: 3, full_name: 'Yash Hopper', phone: 0211234567, country: 'Canada'},
        {id: 4, full_name: 'Lena Carpenter', phone: 0211234567, country: 'Ukraine'},
        {id: 5, full_name: 'Jaeden Bush', phone: 0211234567, country: 'United States of America'},
      ]);
    });
};
