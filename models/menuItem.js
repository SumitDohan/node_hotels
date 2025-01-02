const mongoose = require('mongoose');

const menuItemSchema = new mongoose.Schema({
    name :{type: String, required : true,},
    price:{type: Number, required:true,},
    taste:{type: String,enum:['sweet','spicy','sour'],required: true,},
    isDrink:{type:Boolean,default:false}
})