const express = require("express");
const cors = require("cors");
const app = express()
const port = process.env.port || 3001;

app.use(cors({optionsSuccessStatus: 200}));

app.set('trust proxy', 'loopback')

app.get('/api/whoami', (req, res) => {
    const ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress;
    const reqLanguage = req.headers["accept-language"];
    const reqSoftware = req.headers["user-agent"];
    res.json({ipaddress: ip, language: reqLanguage, software: reqSoftware});
});

app.listen(port, () => {
    console.log(`App listening on port ${port}!`)
});