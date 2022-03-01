const mongoose = require('mongoose');

// Creating a schema for how post will look

const PostSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: String,
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Posts', PostSchema);
// Determines which schema to use