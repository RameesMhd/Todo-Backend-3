const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
    userId: { type: String, required: true },
    title: { type: String, required: true },
    completed: { type: Boolean, default: false },
});

module.exports = mongoose.model('Todo', todoSchema);
