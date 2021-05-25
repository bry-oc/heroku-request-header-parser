const express = require("express");
const cors = require("cors");
const path = require("path");
const app = express()
const port = process.env.port || 3001;

app.use(cors({optionsSuccessStatus: 200}));

app.use(express.static(path.resolve(__dirname, '../client/build')));

app.get('/api/whoami', (req, res) => {
    const ip = req.headers["x-forwarded-for"];
    const reqLanguage = req.headers["accept-language"];
    const reqSoftware = req.headers["user-agent"];
    res.json({ipaddress: ip, language: reqLanguage, software: reqSoftware});
});

app.listen(port, () => {
    console.log(`App listening on port ${port}!`)
});