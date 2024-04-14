const express = require('express');
const app = express();

let requestHistory = [];

app.use((req, res, next) => {
    const logEntry = {
        timestamp: new Date(),
        method: req.method,
        path: req.url,
        headers: req.headers,
        body: req.body
    };
    requestHistory.push(logEntry);
    next();
});

app.get('/history', (req, res) => {
    res.json(requestHistory);
});

app.get('*', (req, res) => {
    res.send("Success.");
});

module.exports = app;

