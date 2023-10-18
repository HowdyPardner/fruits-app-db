// connect Mongoose to the db
// later when we use mongoose somewhere else, it will already be connected

console.log('im in the DB!')

const mongoose = require('mongoose')

let connectionString = `mongodb+srv://db_admin:${process.env.MONGO_PASS}@cluster0.kfpqy9l.mongodb.net/Food?retryWrites=true&w=majority`

console.log(connectionString)

mongoose.connect(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});


// log when connected
mongoose.connection.once('open', () => {
    console.log('connected to mongo');
});

