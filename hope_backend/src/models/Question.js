const mongoose = require('mongoose');
const { Schema } = require('mongoose');
// const mongoosePaginate = require('mongoose-paginate');

const QuestionSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    quiz: [{
        type: String,
        required: true,
    }],
    // quiz: [{
    //     type: Schema.Types.ObjectId,
    //     ref: 'Quiz'
    // }],
    who_answered: [{
        type: Schema.Types.ObjectId,
        ref: 'User'
    }]
});

mongoose.model('Question', QuestionSchema);