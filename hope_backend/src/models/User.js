const mongoose = require('mongoose');
const { Schema } = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    cpf: {
        type: String,
        required: false
    },
    age: {
        type: Number,
        required: false
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    image_url: {
        type: String,
        required: false
    },
    address: {
        country: {
            type: String,
            required: false
        },
        state: {
            type: String,
            required: false
        },
        city: {
            type: String,
            required: false
        },
        zipcode: {
            type: String,
            required: false
        },
        street: {
            type: String,
            required: false
        },
    },
    user_type: {
        type: String,
        enum: ['dependente', 'exdependente' ,'familia', 'especialista'],
        required: true
    },
    answers: [{
        question_id: {
            type: Schema.Types.ObjectId,
            ref: 'Question',
        },
        answer:{
            type: String,
            required: false
        }
    }]
},{ timestamps: true });

UserSchema.plugin(mongoosePaginate);

mongoose.model('User', UserSchema);