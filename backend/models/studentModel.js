const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
    studentName: {
        type: String,
        required: true
    },
    rollNo: {
        type: String,
        required: true,
        unique: true
    },
    age: {
        type: Number,
        required: true
    },
    phoneNo: {
        type: String,
        required: true
    },
    fathersName: {
        type: String,
        required: true
    },
    mothersName: {
        type: String,
        required: true
    },
    branch: {
        type: String,
        required: true
    },
    yearOfStudy: {
        type: Number,
        required: true
    }
});

const Student = mongoose.model('Student', studentSchema);
module.exports = Student;