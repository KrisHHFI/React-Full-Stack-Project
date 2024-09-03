const express = require('express');
const { Sequelize, DataTypes } = require('sequelize');
const app = express();
const port = 3001;

// Set up Sequelize to use SQLite
const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './database.sqlite'  // The database file will be stored in this path
});

// Define a Note model
const Note = sequelize.define('Note', {
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    content: {
        type: DataTypes.TEXT,
        allowNull: false
    }
});

// Middleware to parse JSON bodies
app.use(express.json());

// API route to get all notes
app.get('/notes', async (req, res) => {
    const notes = await Note.findAll();
    res.json(notes);
});

// API route to add a new note
app.post('/notes', async (req, res) => {
    const { title, content } = req.body;
    const newNote = await Note.create({ title, content });
    res.json(newNote);
});

// Sync Sequelize models and start the server
sequelize.sync().then(() => {
    app.listen(port, () => {
        console.log(`Server is running on http://localhost:${port}`);
    });
});
