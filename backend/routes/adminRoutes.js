const express = require("express");
const router = express.Router();
const Admin = require("../models/Admin");

/* Admin Register */

router.post("/register", async(req,res)=>{

const admin = new Admin(req.body);

await admin.save();

res.json({message:"✅ Admin Registered Successfully"});

});

/* Admin Login */

router.post("/login", async(req,res)=>{

const {username,password}=req.body;

const admin = await Admin.findOne({username,password});

if(admin){

res.json({message:"✅ Admin Login Successful"});

}
else{

res.json({message:"❌ Invalid Admin Credentials"});

}

});

module.exports = router;