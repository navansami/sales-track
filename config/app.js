const express = require('express')
const morgan = require('morgan')
const cors = require('cors')

const app = express()

// Middleware
app.use(cors('*'))
app.use(express.json())
app.use(morgan('short'))

// Routes
app.get('/', (req, res) => {
    res.status(200).json({
        message: "success",
        data: "contact your sys admin for access"
    })
})

module.exports = app