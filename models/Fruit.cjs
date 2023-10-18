// create a schema
const mongoose = require('mongoose')


// what the object should look like
const fruitSchema = new mongoose.Schema({
    name: String,
    color: String,
    readyToEat: Boolean,
    age: Number
},
{
    timestamps: true
})


// create a Model with that schema

const Fruit = mongoose.model("Fruit",            fruitSchema)
//                       1. ^ which collection    2. ^ the Schema


module.exports = Fruit;