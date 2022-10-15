const server = require('./config/app')
const connectDB = require('./config/db')

const PORT = process.env.PORT || 8000
const HOST = process.env.HOST || 'http://12.0.0.1'

connectDB()

server.listen(PORT, () => {
    console.log('--------------Server Stats------------------');
    console.log(`Server Up...`);
    console.log(`Host: ${HOST}`);
    console.log(`Port: ${PORT}`);
})
