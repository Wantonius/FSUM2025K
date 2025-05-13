const mongoose = require("mongoose");

let Schema = mongoose.Schema({
	name:String,
	lastname:{type:String,index:true},
	email:String,
	phone:String
})

module.exports = mongoose.model("Contact",Schema);