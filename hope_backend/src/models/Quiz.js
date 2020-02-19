const mongoose = require('mongoose');
const { Schema } = require('mongoose');

const QuizSchema = new mongoose.Schema({
    quiz_type: [{
        type: String,
        required: true
    }],
    // questions: [{
    //     type: Schema.Types.ObjectId,
    //     ref: 'Question', 
    // }],
    questions: [{
        type: String,
        required: true
    }],
});

mongoose.model('Quiz', QuizSchema);