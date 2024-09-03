const express = require('express');
const cors = require('cors');
const sqlite3 = require('sqlite3').verbose();
const path = require('path');

const app = express();
const port = 3001;

// Middleware
app.use(express.json());
app.use(cors()); // Enable CORS for all origins

// Database setup
const dbPath = path.join(__dirname, 'notes.db');
const db = new sqlite3.Database(dbPath);

// Create table if it does not exist
db.serialize(() => {
    db.run(`
        CREATE TABLE IF NOT EXISTS Notes (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            noteTitle TEXT NOT NULL,
            noteText TEXT NOT NULL
        )
    `);
});

// Route to delete a note by ID
app.delete('/notes/:id', (req, res) => {
    const { id } = req.params;
    db.run('DELETE FROM Notes WHERE id = ?', id, function (err) {
        if (err) {
            return res.status(500).json({ error: 'Failed to delete note' });
        }
        res.json({ success: true });
    });
});

// Route to get notes
app.get('/notes', (req, res) => {
    db.all('SELECT * FROM Notes', (err, rows) => {
        if (err) {
            return res.status(500).json({ error: 'Failed to fetch notes' });
        }
        res.json({ notes: rows });
    });
});

// Route to add a new note
app.post('/notes', (req, res) => {
    const { noteTitle, noteText } = req.body;
    db.run(
        'INSERT INTO Notes (noteTitle, noteText) VALUES (?, ?)',
        [noteTitle, noteText],
        function (err) {
            if (err) {
                return res.status(500).json({ error: 'Failed to add note' });
            }
            res.json({ id: this.lastID, noteTitle, noteText });
        }
    );
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

app.get('/', (req, res) => {
    res.send('Welcome to the Notes API!');
});
