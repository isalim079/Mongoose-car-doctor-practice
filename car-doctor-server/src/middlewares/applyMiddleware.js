const cookieParser = require("cookie-parser");
const cors = require("cors")
const express = require("express");
const { LOCAL_CLIENT } = require("../config/default");
const app = express()


const applyMiddleware = () => {
   
    // middleware
    app.use(cors({
        origin: [
            LOCAL_CLIENT
        ],
        credentials: true
    }))
    app.use(express.json())
    app.use(cookieParser())
};

module.exports = applyMiddleware

