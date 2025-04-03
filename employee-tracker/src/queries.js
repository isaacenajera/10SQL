const client = require('./db');

const getDepartments = async () => {
  const res = await client.query('SELECT * FROM department');
  console.table(res.rows);
};

const getRoles = async () => {
  const res = await client.query('SELECT * FROM role');
  console.table(res.rows);
};

const getEmployees = async () => {
  const res = await client.query('SELECT * FROM employee');
  console.table(res.rows);
};

module.exports = { getDepartments, getRoles, getEmployees };
