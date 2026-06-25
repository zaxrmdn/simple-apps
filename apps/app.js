const express = require('express')
const mysql = require('mysql');
const app = express()
const path = require('path')
require('dotenv').config();
<<<<<<< HEAD
app.disable("x-powered-by");
=======
const PORT = process.env.PORT;
>>>>>>> 8f5532c467a68da3df5ed27ddaadd13eeccd4bd4

// Import Middleware
const logger = require('./middleware/logger')
app.use(logger)
const connection = require('./middleware/db_connect');

app.disable("x-powered-by")
// Dashboard
app.use('/', express.static(path.join(__dirname, 'public')));

app.get('/app1', (req, res) => {
  res.send('Hello this Apps 1!')
});

app.get('/app2', (req, res) => {
  res.send('Hello this App 2!')
});

app.get('/users', (req, res, next) => {
  const sql = "SELECT * FROM tb_data ORDER BY id desc"
  connection.query(sql,(error, fields) => {
<<<<<<< HEAD
      console.log('error', error)
      res.send(fields)
=======
    res.send(fields)
>>>>>>> 8f5532c467a68da3df5ed27ddaadd13eeccd4bd4
  })
});

app.listen(process.env.APP_PORT, () => {
  console.log(`Example app listening on port ${process.env.APP_PORT}`)
})

module.exports = app