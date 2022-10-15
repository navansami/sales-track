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
        type: String
    },
    comment: {
        type: Blob
    }
})

module.exports = mongoose.model('enquiry', enquirySchema)