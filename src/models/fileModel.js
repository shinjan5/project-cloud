const mongoose = require('mongoose');

const fileSchema = new mongoose.Schema({
    filename: String,
    bucketName: String,
});

module.exports = mongoose.model('File', fileSchema);
