exports.up = function(knex, Promise) {
    return knex.schema.createTable("numbers", (numbers) => {
        numbers.increments("id")
        numbers.string("name")
        numbers.string("phone")
    })
  
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExist("numbers")
};

