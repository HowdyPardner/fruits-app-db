// create a schema
const mongoose = require('mongoose')



// what the object should look like
const veggieSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    color: String,
    readyToEat: Boolean,
    age: Number,
    isHealthy: Boolean
},
    {
        timestamps: true
    })


// create a Model with that schema

const Veggie = mongoose.model("Veggie",              veggieSchema)
//                           1. ^ which collection    2. ^ the Schema


module.exports = Veggie;