const express = require('express')

const app = express()

app.get('/', (req, res) => {
    res.status(200).json({
        message: "success",
        data: "contact your sys admin for access"
    })
})

module.exports = app