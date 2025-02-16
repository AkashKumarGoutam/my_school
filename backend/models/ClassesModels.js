const moongoose = require('mongoose');
const classesSchema = new moongoose.Schema({
    className: {
        type: String,
        required: true
    }
});
const classesModel = moongoose.model('classes', classesSchema);
module.exports = classesModel;