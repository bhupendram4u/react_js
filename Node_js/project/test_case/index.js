// app.js
const express = require('express');
const mysql = require('mysql2/promise');

const app = express();
app.use(express.json());

const pool = mysql.createPool({
  host: '10.162.6.155',
  user: 'gtuser',
  password: 'Gtuser@123',
  database: 'testing_db',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

app.get('/api/student/:rollNumber', async (req, res) => {
  const { rollNumber } = req.params;

  try {
    const connection = await pool.getConnection();
    const [rows] = await connection.query('SELECT * FROM EMPLOYEE WHERE Emp_No = ?', [rollNumber]);
    connection.release();

    if (rows.length > 0) {
      res.json(rows[0]);
    } else {
      res.status(404).json({ error: 'Student not found' });
    }
  } catch (error) {
    console.error('Error fetching student:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = app;
let w_port=2000
app.listen(w_port, () => {
    console.log("\n ####################################################\n")
    console.log(`Server is listening on port  :${w_port} \n` + "Source  : " );
    console.log("http://10.135.25.221:" + w_port + "/urlwhitelist/login")
    console.log("\n ####################################################\n")
    // console.log(process.env.NODE_ENV)
  });
  