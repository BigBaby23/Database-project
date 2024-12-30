const http = require('http');
const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');

const app = express();
const PORT = 3309;

// Middleware
app.use(bodyParser.json());

// MySQL Database Connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Adegbayibi23',
  database: 'food_project',
});

db.connect((err) => {
  if (err) {
    console.error('Error connecting to the database:', err);
  } else {
    console.log('Connected to MySQL database.');
  }
});

// Beneficiaries API Endpoints

// Get all beneficiaries
app.get('/api/beneficiaries', (req, res) => {
  db.query('SELECT * FROM beneficiaries', (err, results) => {
    if (err) {
      console.error('Error fetching beneficiaries:', err);
      res.status(500).send(err);
    } else {
      res.json(results);
    }
  });
});

// Add a new beneficiary
app.post('/api/beneficiaries', (req, res) => {
  const { name, contact, address, delivery } = req.body;
  db.query(
    'INSERT INTO beneficiaries (name, contact, address, delivery) VALUES (?, ?, ?, ?)',
    [name, contact, address, delivery],
    (err, result) => {
      if (err) {
        console.error('Error adding beneficiary:', err);
        res.status(500).send(err);
      } else {
        res.status(201).json({ id: result.insertId, name, contact, address, delivery });
      }
    }
  );
});

// Delete a beneficiary
app.delete('/api/beneficiaries/:id', (req, res) => {
  const { id } = req.params;
  db.query('DELETE FROM beneficiaries WHERE id = ?', [id], (err, result) => {
    if (err) {
      console.error('Error deleting beneficiary:', err);
      res.status(500).send(err);
    } else {
      res.json({ message: 'Beneficiary deleted successfully.' });
    }
  });
});

// Create HTTP Server and Attach Express App
const server = http.createServer(app);

server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});
