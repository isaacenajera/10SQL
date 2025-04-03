const inquirer = require('inquirer');
const db = require('./db'); 

async function mainMenu() {
  const { choice } = await inquirer.prompt([
    {
      type: 'list',
      name: 'choice',
      message: 'What would you like to do?',
      choices: [
        'View All Departments',
        'View All Roles',
        'View All Employees',
        'Exit'
      ]
    }
  ]);

  console.log(`You selected: ${choice}`); // Debugging

  switch (choice) {
    case 'View All Departments':
      console.log('Calling viewDepartments()...'); // Debugging
      await viewDepartments();  
      break;
    case 'View All Roles':
      console.log('Calling viewRoles()...'); // Debugging
      await viewRoles();
      break;
    case 'View All Employees':
      console.log('Calling viewEmployees()...'); // Debugging
      await viewEmployees();
      break;
    case 'Exit':
      console.log('Goodbye!');
      process.exit();  
  }

  console.log('Returning to main menu...'); // Debugging
  await mainMenu(); 
}

async function viewDepartments() {
  console.log('Running viewDepartments query...'); // Debugging
  try {
    const result = await db.query('SELECT * FROM department');
    console.log('Query successful!'); // Debugging
    console.log('Query result:', result.rows); // Debugging
    console.table(result.rows);
  } catch (error) {
    console.error('Error fetching departments:', error.message);
  }
}



async function viewRoles() {
  console.log('Fetching roles from database...'); // Debugging log

  try {
    const result = await db.query('SELECT * FROM role');  
    console.table(result.rows);
  } catch (error) {
    console.error('Error fetching roles:', error.message);
  }
}


async function viewEmployees() {
  try {
    const result = await db.query('SELECT * FROM employee');
    console.table(result.rows);  // Check if any rows are returned
  } catch (err) {
    console.error('Error retrieving employees:', err);
  }
}

module.exports = mainMenu;
