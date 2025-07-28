const express = require('express');
const aiRoutes = require('./routes/ai.routes')
const cors = require('cors')
const path = require("path");

const app = express()

app.use(cors())

app.use(express.static(path.join(__dirname, "../Frontend/build")));





app.use(express.json())

app.get('/', (req, res) => {
    res.send('Hello World')
})

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../Frontend/build/index.html"));
});

app.use('/ai', aiRoutes)

module.exports = app