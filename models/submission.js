const mongoose = require('mongoose');
const Schema  = mongoose.Schema

const Submit = new Schema(
    {
        title: {type: String, required: true},
        full_name: {type: String, required: true},
        description: {type: String, required: true},
        time_frame: {type: String, required: true},
        url: {type: String, required: true},
    },

    {timestamps: true}
)

module.exports = mongoose.model('submit', Submit)