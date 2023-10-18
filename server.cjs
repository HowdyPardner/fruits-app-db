

/* eslint-disable no-undef */
const express = require('express')
// path built into node.js
const path = require('path')
const cors = require('cors')
const morgan = require('morgan')
const PORT = 3000;
const app = express();

const Fruit = require('./models/Fruit.cjs')
const Veggie = require('./models/Veggie.cjs');

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




// using async/await to handle the promise
app.get('/fruits', async (req, res) => {
    let fruitsFromDB = await Fruit.find()
    res.send(fruitsFromDB)
})


// using .then() to handle the promise
//  app.get('/fruits', (req, res) => {
// Fruit.find().then((fruitsfromDB)=>{
// res.send(fruitsFromDB)
// })
// 
// })

app.post("/fruits", (req, res) => {
    console.log('REQ.BODY=>',req.body);
    let fruit = req.body
    Fruit.create(fruit).then((response) => console.log(response))
    res.status(200).send("Route is good!");
})

app.get('/', (req, res) => {
    res.send("here is your valuable data")
})

app.get('/veggies', async (req, res) => {
    let veggiesFromDB = await Veggie.find()
    res.send(veggiesFromDB)
})


app.post("/veggies", async (req, res) => {
    // make Veggie model
    let dbResponse = await Veggie.create(req.body);
    // the created object
    res.status(201).send(dbResponse)
})

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
});