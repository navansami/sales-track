const router = require('express').Router()
const Enquiry = require('../controllers/enquiries');

router
    .route('/')
    .get(Enquiry.getAllEnquiries)
    .post(Enquiry.addEnquiry)
    

module.exports = router