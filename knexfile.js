// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    connection: 'postres://postgres:winter@localhost/twilio_test'
  // - (( connection: 'localhost/<DB_NAME>'))
  },
  
  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
  }

};
