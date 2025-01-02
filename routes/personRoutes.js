//It manages the routess of the APIs
const express = require('express');
const router = express.Router();

// POST route to a person
router.post('/person',async(req,res)=>{
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
 router.get('/person',async (req,res)=>{
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
 
  module.exports = router;