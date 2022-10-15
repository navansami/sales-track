const mongoose = require('mongoose')

const enquirySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        unique: true
    },
    mobile: {
        type: String,
        unique: true
    },
    pax: {
        type: String,
    },
    comment: {
        type: String
    },
    status: {
        type: Boolean
    }
})

module.exports = mongoose.model('enquiry', enquirySchema)