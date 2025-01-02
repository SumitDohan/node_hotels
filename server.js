/*function callback(){
    console.log('Sumit is calling the callback function');
}
const add = function(a,b,callback){
    var result = a+b;
    console.log(result);
    callback();
}
add(4,4,callback );*/

/*var fs = require('fs');
var os = require('os');


var user = os.userInfo();
console.log(user);

fs.appendFile('Greeting.txt','Hi ' + user.username + '!\n',()=>{
    console.log('file is created');
});*/

/*
const notes = require('./notes.js');
var age = notes.age;
console.log(age);*/

/*import loadash from 'lodash';
var data = ["person","person", 1,2,1,2,'name','age'];
console.log("hii");
//find unique out of the array
var filter = loadash.uniq(data);
console.log(filter); */
/*
//json string to json object 
const jsonString = '{"name" : "Sumit", "age": 35,"city": "California"}'
const jsonObject = JSON.parse(jsonString);
console.log(jsonObject.name);

//json object to json string

const objectToConvert = {
    name : "Sumit Dohan",
    age : 35
};
const jsonStringified = JSON.stringify(objectToConvert);
console.log(objectToConvert);
console.log(jsonStringified);
*/


//importing mongodb object
const db = require('./db');
// import model named person
const person =require('./models/person')
//Creating a server

const express = require('express')
const app = express(); 
//importing body parser
const bodyParser = require('body-parser');
app.use(bodyParser.json())  // returns this object in req.body part of get or post request


//creating post method

app.post('/person',async(req,res)=>{
   /* const data = req.body  //as person data comes in body parser req.body
     //create a new person document using mongoose model 
     const newPerson = new person(data);
// now save the new person to the database
newPerson.save((error,savedPerson)=>{
    if(error)
    {
        console.log('Error saving person details : ',error);
        res.status(500).json({error:'Internal server error'}); //500-599  -- server error response

    }
    else{
        console.log('data saved successfully');
        res.status(200).json({savedPerson });   //200-299  -- successful response
    }
})*/    // not good practise to code using callback function,,,, instead use try and catch and async and await


try{
    const data = req.body  //as person data comes in body parser req.body
     //create a new person document using mongoose model 
     const newPerson = new person(data);
// now save the new person to the database
const response = await newPerson.save();
console.log('data saved');
res.status(200).json(response);
}
catch(err){
    console.log(err);
    res.status(500).json({error: 'Internal server error'});
}
})

// to fetch data
app.get('/person',async (req,res)=>{
try{
    const data = await person.find();
    console.log('data fetched');
    res.status(200).json(data);
}
catch(err)
{
    console.log(err);
    res.status(200).json({error:'Internal server error'});
}
})




app.get('/Butter',(req,res)=>{
    res.send("Sure I will bring thr Butter Paneer quickly for you ")
})


//Import the router files
const personRoutes = require('./routes/personRoutes');

//use the router
app.use('/person',personRoutes);


//Import the router file

const menuItemRoutes = require('./routes/menuItem')

//use the router
app.use('/menu',menuItem);

app.listen(3000,()=>{console.log('server is running on port 3000')})

