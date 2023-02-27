
require('dotenv').config();

const express = require('express');
const app = express()

app.get('/', (req, res) => {
    res.send("")
})

app.listen( process.env.PORT, () => {
    console.log('Server active on, ', process.env.PORT);
})