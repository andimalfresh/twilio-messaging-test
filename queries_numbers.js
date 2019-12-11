  
const db = require("./database-connection")

module.exports = {
    
    listAll() {
        return db("numbers")
    },
    createOrder(createNumber) {
        return db("numbers")
        .insert(createNumber)
        .returning("*")
    },
    deleteOrder(id) {
        return db("numbers")
        .where("id",id)
        .delete()
    },
    getById(id) {
        return db("numbers").where("id", id)
    },
    updateOrder(id, numbers) {
        return db("numbers")
          .where('id', id)
          .update(numbers)
          .returning('*')
      }
}