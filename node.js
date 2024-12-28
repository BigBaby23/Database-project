const mysql = require('mysql');

// Create a MySQL connection
const connection = mysql.createConnection({
  host: '3306',
  user: 'root',
  password: 'Adegbayibi23',
  database: 'food_project'
});

// Connect to MySQL
connection.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
    return;
  }
  console.log('Connected to MySQL database.');

  // Query the table
  connection.query('SELECT * FROM donor_id', (err, results) => {
    if (err) {
      console.error('Error fetching data:', err);
      return;
    }

    console.log('Results:', results);
    connection.end(); // Close the connection
  });
});
