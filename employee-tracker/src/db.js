require('dotenv').config();
const { Client } = require('pg');

const client = new Client({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASS,
  port: process.env.DB_PORT || 5432
});

async function connectDB() {
  try {
    await client.connect();
    console.log('Database connected successfully!');
  } catch (err) {
    console.error('Database connection failed:', err.message);
    
  }
}

connectDB();

module.exports = client;
