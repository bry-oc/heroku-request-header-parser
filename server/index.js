const express = require("express");
const cors = require("cors");
const publicIp = require('public-ip');
const app = express()
const port = process.env.port || 3001;

app.use(cors({optionsSuccessStatus: 200}));

app.get('/api/whoami', (req, res) => {
    async function getUserInfo() {
        const ip = await publicIp.v4();
        const reqLanguage = req.headers["accept-language"];
        const reqSoftware = req.headers["user-agent"];
        res.json({ipaddress: ip, language: reqLanguage, software: reqSoftware});
    };
    getUserInfo();
});

app.listen(port, () => {
    console.log(`App listening on port ${port}!`)
});