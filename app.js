const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const ejs = require('ejs');
// const mongoose = require('mongoose');

const app = express();

//DB config
const db = require('./config/keys').MongoURI;
const options = {
    useUnifiedTopology: true,
    useNewUrlParser: true
}
//Connect to Mongo
// mongoose.connect(db, options)
//     .then(()=> console.log('MongoDB connected...'))
//     .catch((err) => console.log(err));

//EJS
app.use(expressLayouts);
app.set('view engine', 'ejs');

//Bodyparser
app.use(express.urlencoded({extended: false}));

//Routes
app.use('/', require('./routes/index'));

//Users routes
app.use('/users',require('./routes/users'));











const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server is running on ${PORT}`));