require('dotenv').config();

const config = {
  // env: process.env.NODE_ERV !== 'production'
  port: process.env.PORT || 3000,

  // Mongo
  dbUser: process.env.DB_USER,
  dbPassword: process.env.DB_PASSWORD,
  dbHost: process.env.DB_HOST,
  dbName: process.env.DB_NAME
}

module.exports = { config };