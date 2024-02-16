// Import necessary modules
// Connect to database
const mysql = require("mysql2");
const connection = mysql.createConnection(
    {
      host: 'localhost',
      user: 'root',
      password: 'mysqlpassword',
      database: 'employeeDB'
    },
    console.log(`Connected to the db database.`)
  );

  module.exports = connection;

