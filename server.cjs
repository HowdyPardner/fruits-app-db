/* eslint-disable no-undef */
const express = require('express')
// path built into node.js
const path = require('path')
const cors = require('cors')
const morgan = require('morgan')
const PORT = 3000;
const app = express();

const Fruit = require('./models/Fruit.cjs')

// allows us to use provess.env (get variables from .env file)
require('dotenv').config()

require('./config/db.cjs')

// const middleware = (req, res, next) => {
//     console.log("doing stuff");
//     next();
// }

app.use(cors({
    origin: "*"
}))

app.use(morgan('dev'))

// app.use(middleware);

app.use(express.json()); // adds .body to the request

// "/"
// serve the html and js of our react app (dist folder)





app.get('/fruits', (req, res) => {
    // res.send(fruits)
})

app.post("/fruits", (req, res) => {
    console.log('REQ.BODY=>',req.body);
    let fruit = req.body
    Fruit.create(fruit).then((response) => console.log(response))
    res.send("Route is good!");
})

app.get('/', (req, res) => {
    res.send("here is your valuable data")
})

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
});