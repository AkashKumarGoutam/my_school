const mongoose = require('mongoose');
const subjectSchema = new mongoose.Schema({
    subjectName: {
        type: String,
        required: true
    },
    subjectCode: {
        type: String,
        required: true
    }
});
const subjectModel = mongoose.model('subjects', subjectSchema);
module.exports = subjectModel;