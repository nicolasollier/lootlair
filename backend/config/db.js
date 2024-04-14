const mysql = require('mysql2')
const dotenv = require('dotenv');
const env = process.env.NODE_ENV;

dotenv.config();

const config = {
  development: {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE_DEV,
    host: process.env.DB_HOST,
  },
  test: {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE_TEST,
    host: process.env.DB_HOST,
  },
  production: {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE_PROD,
    host: process.env.DB_HOST,
  }
};

const { username, password, database, host } = config[env]

const pool = mysql.createPool({
  host,
  user: username,
  password,
  database,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
})

module.exports = {
  pool,
  config
};
