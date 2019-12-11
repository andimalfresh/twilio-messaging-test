
exports.up = function(knex, Promise) {
    return knex.schema.createTable("messages", (messages) => {
        messages.increments("id")
        messages.string("text")
        messages.string("media")
    })
  
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExist("messages")
};
