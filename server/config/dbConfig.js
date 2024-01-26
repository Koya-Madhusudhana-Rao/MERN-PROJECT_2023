const mongoose = require('mongoose');

<<<<<<< HEAD
mongoose.connect(process.env.mongo_url)

const connection = mongoose.connection;

connection.on('connected'  , ()=>{
    console.log('Mongo DB Connection Successful');
})

connection.on('error'  , (err)=>{
    console.log('Mongo DB Connection Failed');
})
=======
mongoose.connect(process.env.mongo_url);

const connection = mongoose.connection;

connection.on('connected' , ()=>{
    console.log('Mongo DB Connection Successful');
});

connection.on('error' , (err)=>{
    console.log('Mongo DB Connection Failed');
});
>>>>>>> origin/master

module.exports = connection;