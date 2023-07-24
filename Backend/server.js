const express = require('express')
const mysql = require('mysql')
const cors = require('cors')
const bodyParser = require('body-parser'); // Import body-parser
const bcrypt = require('bcrypt');


const app = express()
app.use(cors());
app.use(bodyParser.json()); // Add this line to use the JSON body parser


const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'blog_storage'
})
app.get('/', (re, res) => {
    return res.json("this is backend");
})

app.get(`/blogs`, (req, res) => {
    const sql = `SELECT * FROM blog_store`;
    db.query(sql, (err, data) => {
        if (err) return res.json(err);
        return res.json(data);
    })
})

app.get('/blogs/:id', (req, res) => {
    const sid = req.params.id;
    const id = parseInt(sid);
    db.query('SELECT * FROM blog_store WHERE id = ?', [id], (err, result) => {
        if (err) throw err;
        if (result.length === 0) {
            res.status(404).json({ error: 'Row not found' });
        } else {
            res.json(result[0]);
        }
    });
});

app.post('/blogs', (req, res) => {
    const { title, body, author } = req.body;
    const sql = 'INSERT INTO blog_store (title, body, author) VALUES (?, ?, ?)';
    db.query(sql, [title, body, author], (err, result) => {
        if (err) {
            return res.status(500).json({ error: 'Failed to insert blog into the database' });
        }
        // The blog entry was successfully inserted, and the `result` object contains the information about the inserted row.
        return res.json({ message: 'Blog entry created successfully', blogId: result.insertId });
    });
});

app.delete('/blogs/:id', (req, res) => {
    const id = req.params.id;
    const sql = 'DELETE FROM blog_store WHERE id = ?';
    db.query(sql, [id], (err, result) => {
        if (err) {
            return res.status(500).json({ error: 'Failed to delete blog from the database' });
        }
        // The blog entry was successfully deleted.
        return res.json({ message: 'Blog entry deleted successfully' });
    });
});



// Register endpoint
app.post('/register', async (req, res) => {
    const { name, username, email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10); // Hash the password
    const sql = 'INSERT INTO members (name, username, email, password) VALUES (?, ?, ?, ?)'; // Insert the user data into the database
    db.query(sql, [name, username, email, hashedPassword], (err, result) => {
        if (err) {
            console.error(err); // Log the error for debugging purposes
            return res.status(500).json({ error: 'Failed to register user' });
        }
        return res.json({ message: 'User registered successfully', userId: result.insertId });
    });

});

app.use((err, req, res, next) => {
    console.error(err);
    return res.status(500).json({ error: 'Internal server error' });
});


// Login endpoint
app.post('/login', async (req, res) => {
    const { email, password } = req.body;

    try {
        // Retrieve the user with the provided email from the database
        const sql = 'SELECT * FROM members WHERE email = ?';
        db.query(sql, [email], async (err, result) => {
            if (err) {
                return res.status(500).json({ error: 'Failed to login' });
            }
            if (result.length === 0) {
                return res.status(401).json({ error: 'Invalid credentials' });
            }

            // Compare the hashed password with the provided password
            const user = result[0];
            const isPasswordValid = await bcrypt.compare(password, user.password);

            if (!isPasswordValid) {
                return res.status(401).json({ error: 'Invalid credentials' });
            }

            return res.json({ message: 'Login successful', user });
        });
    } catch (err) {
        return res.status(500).json({ error: 'Failed to login' });
    }
});

app.listen(8000, () => {
    console.log("listening")
})