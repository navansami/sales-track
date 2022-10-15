const router = require('express').Router()

router
    .route('/')
    .get(() => console.log('route not yet defined'))
    .post(() => console.log('route not yet defined'))
    

module.exports = router