const express = require("express");
const mongoose = require("mongoose");
const shoppingroute = require("./routes/shoppingroute");
const userModel = require("./models/user");
const bcrypt = require("bcrypt");

const app = express();

app.use(express.json());

const mongo_url = process.env.MONGODB_URL;
const mongo_user = process.env.MONGODB_USER;
const mongo_password = process.env.MONGODB_PASSWORD;

const url= "mongodb+srv://"+mongo_user+":"+mongo_password+"@"+mongo_url+"/shopdatabase?retryWrites=true&w=majority"

mongoose.connect(url).then(
	() => console.log("Connected to mongodb"),
	(err) => console.log("Failed to connect to mongodb. Reason:",err)
)

mongoose.set("toJSON",{virtuals:true});

//HELPER FUNCTIONS AND CONSTANTS


//LOGIN API

//register

app.post("/register",function(req,res) {
	if(!req.body) {
		return res.status(400).json({"Message":"Bad request"});
	}
	if(!req.body.username || !req.body.password) {
		return res.status(400).json({"Message":"Bad request"});
	}
	if(req.body.username.length < 4 || req.body.password.length <8) {
		return res.status(400).json({"Message":"Bad request"});
	}
	bcrypt.hash(req.body.password,14,function(err,hash) {
		if(err) {
			return res.status(500).json({"Message":"Internal server error"});
		}
		const user = new userModel({
			username:req.body.username,
			password:hash
		})
		user.save().then(function() {
			return res.status(200).json({"Message":"Register Success"});
		}).catch(function(err) {
			if(err.code === 11000) {
				return res.status(409).json({"Message":"Username already in use"});
			}
			return res.status(500).json({"Message":"Internal server error"});
		});
	})
})

app.use("/api",shoppingroute);

console.log("Running in port 3000");

app.listen(3000);