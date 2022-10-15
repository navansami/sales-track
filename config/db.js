const mongoose = require('mongoose')

const DB = 'sales'
const mongoURI = `mongodb+srv://admin:access12345@cluster0.t44pqfp.mongodb.net/${DB}`

const connectDB = async () => {
    await mongoose
        .connect(mongoURI)
        .then(data => console.log(`connected to database: ${DB}`))
        .catch(err => console.error(err))
}

module.exports = connectDB