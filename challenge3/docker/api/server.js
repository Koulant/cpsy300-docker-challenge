
const express = require('express');
const fs = require('fs');
// Require mysql for the database connection
const mysql = require('mysql');
require('dotenv').config();

const app = express();

// const fsMemoryStats = '/proc/meminfo';

// const pid = process.pid;
// const env = process.env;

// Create a connection to the database using a connection pool
const pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE
});

// Route to get all books from the database
app.get('/api/books', (req, res) => {
    pool.getConnection((err, connection) => {
        if (err) {
            console.error('Error getting database connection:', err);
            res.status(500).json({ error: 'Database error' });
            return;
        }
        connection.query('SELECT * FROM books', (error, results) => {
            connection.release(); // Release the connection back to the pool
            if (error) {
                console.error('Error executing query:', error);
                res.status(500).json({ error: 'Database error' });
                return;
            }
            res.json(results);
        });
    });
});

// app.get('/api/books', (req, res) => {
//     res.json(books);
// });

// Route to get a specific book by ID from the database
// TO BE IMPLEMENTED

// app.get('/api/books/:id', (req, res) => {
//     const id = parseInt(req.params.id);
//     const book = books.find(b => b.id === id);
//     if (!book) {
//         res.status(404).send('Book not found');
//         return;
//     }
//     res.json(book);
// });

// Start the server on port 8080 instead of 3000
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

// Close the database connection pool when the server is stopped
process.on('SIGINT', () => {
    pool.end((err) => {
        if (err) {
            console.error('Error closing database connection pool:', err);
            process.exit(1);
        }
        console.log('Database connection pool closed');
        process.exit(0);
    });
});
