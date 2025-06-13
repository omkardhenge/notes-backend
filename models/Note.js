const mongoose = require('mongoose');

const NoteSchema = new mongoose.Schema({
    title: {
         type: String, required: true 
    },
    content: { 
        type: String, required: true 
    },
    notePriority: {
         type: String, required: true 
    }  // ✅ Add this line
    
});

module.exports = mongoose.model('Note', NoteSchema);
