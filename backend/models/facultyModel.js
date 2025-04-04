const mongoose = require('mongoose');

const facultySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    branch: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    qualifications: {
        type: String,
        required: true
    },
    courseAlloted: {
        type: String,
        required: true
    },
    phoneno: {
        type : Int32Array,
        required:true
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Faculty', facultySchema);