const mysql = require('mysql')
<<<<<<< HEAD
require('dotenv').config();
=======
>>>>>>> 8f5532c467a68da3df5ed27ddaadd13eeccd4bd4

// Connect database
const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME
})

module.exports = connection