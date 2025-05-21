const mysql = require("mysql2");
require("dotenv").config();
const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

connection.connect((err) => {
  if (err) throw err;
  console.log("MySQL Connected!");

  const createTableQuery = `
    CREATE TABLE IF NOT EXISTS todos (
      id INT AUTO_INCREMENT PRIMARY KEY,
      task VARCHAR(255) NOT NULL,
        status BOOLEAN NOT NULL 
    )
  `;

  connection.query(createTableQuery, (err, results) => {
    if (err) throw err;
    console.log("Checked/Created 'todos' table");
  });
});

module.exports = connection;
