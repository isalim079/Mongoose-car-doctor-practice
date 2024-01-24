const express = require('express');
const applyMiddleware = require('./middlewares/applyMiddleware');
require('dotenv').config()
const app = express()
const port = process.env.PORT ||5000

applyMiddleware(app)


app.get('/health', (req, res) => {
    res.send('doctor is running')
})

app.all("*", (req, res, next) => {
    const error = new Error(`The requested url is invalid: [${req.url}]`)
    error.status = 400
    next(error)
})

app.use((err, req, res, next) => {

    res.status(err.status || 500).json({
        message:err.message
    })

    // console.log('from line 18');
})

app.listen(port , () => {
    console.log(`car doctor server is running on port ${port}`);
})