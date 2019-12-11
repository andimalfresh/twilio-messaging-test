  
const db = require("./database-connection")

module.exports = {
    
    listAll() {
        return db("messages")
    },
    createOrder(createMessages) {
        return db("messages")
        .insert(createMessages)
        .returning("*")
    },
    deleteOrder(id) {
        return db("messages")
        .where("id",id)
        .delete()
    },
    getById(id) {
        return db("messages").where("id", id)
    },
    updateOrder(id, messages) {
        return db("messages")
          .where('id', id)
          .update(messages)
          .returning('*')
      }
}