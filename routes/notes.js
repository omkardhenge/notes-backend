const express = require('express');
const router = express.Router();
const Note = require('../models/Note');

// GET /notes
router.get('/notes', async (req, res) => {
    try {
        const notes = await Note.find();
        res.status(200).json(notes);
    } catch (err) {
        res.status(500).json({ error: 'Error fetching notes' });
    }
});

// POST /save-notes
router.post('/save-notes', async (req, res) => {
    const { title, content } = req.body;
    if (!title || !content) {
        return res.status(400).json({ error: 'Missing title or content' });
    }

    try {
        const newNote = new Note({ title, content });
        await newNote.save();
        res.status(201).json({ message: 'Note saved!' });
    } catch (err) {
        res.status(500).json({ error: 'Error saving note' });
    }
});

module.exports = router;
