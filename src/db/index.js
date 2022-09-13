const mysql = require('mysql2/promise');
require('dotenv').config();

// console.log(process.env);
const connection = mysql.createPool({
  host: process.env.MYSQL_HOST, // usa process.env para Docker
  port: process.env.DB_PORT,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.DB_NAME,
});

module.exports = connection;