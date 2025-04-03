require('dotenv').config(); 

console.log(process.env);

const { Client } = require('pg');

// Database connection configuration using environment variables
const client = new Client({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASS,
  port: process.env.DB_PORT || 5432
});



const mainMenu = require('./prompts');

console.log('Welcome to the Employee Tracker');
mainMenu();

