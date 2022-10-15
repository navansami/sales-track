const server = require('./config/app')
const PORT = process.env.PORT || 8000
const HOST = process.env.HOST || 'http://12.0.0.1'

server.listen(PORT, () => {
    console.log('--------------Server Stats------------------');
    console.log(`Server Up...`);
    console.log(`Host: ${HOST}`);
    console.log(`Port: ${PORT}`);
})
