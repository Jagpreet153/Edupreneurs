const mongoose = require('mongoose');

const classSchema = new mongoose.Schema({
    teacher: {
        type: String,
        default: null
    },
    participants: [{
        students: [{
            type: String,  // student's email
            required: true
        }],
        parents: [{
            type: String,  // parent's email
            default: null
        }]
    }],
})