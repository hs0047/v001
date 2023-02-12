const https = require('http');

const server = https.createServer((req, res) => {
    req.statusCode = 200;
    // req.setHeader('Content-Type', 'Text/Plain');
    res.end("Namaste")
})

const PORT = process.env.SERVER_PORT || 3002;

server.listen(PORT, () => {
    console.log(`Server is Running on Port ${PORT}`)
})