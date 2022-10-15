const Enquiry = require('../models/Enquiry')

// Method:  POST
addEnquiry = async (req, res) => {

    try {
        const enq = await Enquiry.create(req.body)
        res.status(200).json({
            message: "success",
            data: enq
        })
    } catch (err) {
        res.status(400).json({
            message: "fail",
            error: err
        })
    }
}


// Method:  GET
getAllEnquiries = async (req, res) => {

    try {
        const enquiries = await Enquiry.find()
        res.status(200).json({
            message: "success",
            total: enquiries.length,
            data: enquiries
        })
    } catch (err) {
        res.status(400).json({
            message: "fail",
            error: err
        })
    }
}

module.exports = {
    addEnquiry,
    getAllEnquiries
}