const mysql = require('mysql2/promise');
require('dotenv').config();

const connection = mysql.createPool({
  host: process.env.DB_HOST || 'localhost', // usa process.env para Docker
  port: process.env.DB_PORT || 3306,
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || 'sua_senha',
  database: process.env.DB_NAME || 'StoreManager',
});

module.exports = connection;