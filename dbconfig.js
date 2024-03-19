const { Client } = require("pg");
require("dotenv").config();

const dbUser = process.env.DB_USER;
const dbPassword = process.env.DB_PASSWORD;
const dbHost = process.env.DB_HOST;
const dbName = process.env.DB_NAME;
const PORT = process.env.PORT;

// load values from .env to pass it to pg client to open a connection
const client = new Client({
  user: dbUser,
  host: dbHost,
  database: dbName,
  password: dbPassword,
  port: PORT,
});

module.exports = client;
