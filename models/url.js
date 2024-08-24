const { timeStamp } = require("console");
const mongoose = require("mongoose");
const { type } = require("os");

//creating schema for url
const urlSchema = new mongoose.Schema({
    shortId:{
        type:String,
        required:true,
        unique:true,
    },
    redirectURL:{
        type:String,
        required:true,
    },
   visitHistory: [{timeStamp:{type:Number}}],
},
{timestamps:true}
);

const URL = mongoose.model("url",urlSchema);

module.exports = URL;

