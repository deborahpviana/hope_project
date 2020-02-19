const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');

const CardSchema = new mongoose.Schema({
    title: {
        type: String,
        required: false
    },
    description: {
        type: String,
        required: true
    },
    image_url: {
        type: String,
        required: false
    },
    video_url: {
        type: String,
        required: false
    },
    link_url: {
        type: String,
        required: false
    },
    headline: {
        type: String,
        required: false
    }
}, { timestamps: true });

CardSchema.plugin(mongoosePaginate);

mongoose.model('Card', CardSchema);