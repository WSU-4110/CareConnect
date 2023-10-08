const mysql = require('mysql2');

const config = {
  host: 'your-mysql-host',
  user: 'careConnect',
  password: 'careConnect2023',
  database: 'mysqlDB',
};

// Controller function to handle user signup
const signup = async (req, res) => {
  try {
    const { firstName, lastName, email, dob } = req.body;

    // Create a MySQL connection pool
    const pool = mysql.createPool(config);

    // Check if the email is already in use
    const emailCheckQuery = 'SELECT * FROM Users WHERE Email = ?';

    const [emailCheckResult] = await pool.promise().execute(emailCheckQuery, [email]);

    if (emailCheckResult.length > 0) {
      pool.end(); // Close the connection pool
      return res.status(400).json({ error: 'Email is already in use' });
    }

    // Insert the new user into the database
    const insertQuery = `
      INSERT INTO Users (FirstName, LastName, Email, Password)
      VALUES (?, ?, ?, ?)
    `;

    // You should hash the password and provide it here
    const hashedPassword = 'hashed-password-placeholder';

    await pool.promise().execute(insertQuery, [firstName, lastName, email, hashedPassword]);

    pool.end(); // Close the connection pool

    // Respond with a success message
    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    console.error('Error in signup controller:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

module.exports = {
  signup,
};
