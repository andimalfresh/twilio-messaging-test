
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('messages').del()
    .then(function () {
      // Inserts seed entries
      return knex('messages').insert([
        {id: 1, text: 'Welcome To PreFares Text Messaging Service', media:'http://prefare-denver.com'},
        {id: 2, text: 'This is the Second Message from the Prefare Text App', media:'http://prefare-denver.com'},
        {id: 3, text: 'This is the Third Message from the Prefare Text App', media:'http://prefare-denver.com'},
      ]);
    });
};
