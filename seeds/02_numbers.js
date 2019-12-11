
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('numbers').del()
    .then(function () {
      // Inserts seed entries
      return knex('numbers').insert([
        {id: 1, name: 'Andrew', phone: '9705319665'},
        {id: 2, name: 'Doug', phone: '7015555555'},
        {id: 3, name: 'Matt', phone: '3035555555'}
      ]);
    });
};
