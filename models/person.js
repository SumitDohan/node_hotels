const mongoose = require('mongoose');

// Define the person schema

const personSchema = new mongoose.Schema({
    name :{ 
        type:String,
        required:true   //this says that name is mandatory fiels
    },
    age: {
        type:Number
    },
    work:{
        type:String,
        enum:['chef','waiter','manager'],       // to reduce the error and select only nfrom this list
        require:true
    },
    mobile:{
        type:String,
        required:true
    },
    email:{
        type: String, 
        required :true,
    
    },
    address:{
        type:String

    },
    salary:{
        type:Number,
        required:true
    }

})


//create a person model now

const person = mongoose.model('person',personSchema);
module.exports = person;

// now export this model to the server