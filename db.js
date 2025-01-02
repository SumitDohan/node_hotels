const mongoose = require('mongoose');

// Define the mongodb connection
const mongoUrl = 'mongodb://localhost:27017/hotels'    //hotels is database name

//set up mongoDB connection
mongoose.connect(mongoUrl,{useNewUrlParser:true,useUnifiedTopology:true});

//get the default connection 
db = mongoose.connection;




//defining listeners

//for successful connection
db.on('connected',()=>{
    console.log('Connected to mongodb server');
})
//for unsuccessful connection
db.on('error',(err)=>{
    console.log('Mongodb Connection error',err);
})

// for disconnection
db.on('disconnected',()=>{
    console.log('Mongodb disconnected');
})

//Export the database connection
module.exports = db; 
