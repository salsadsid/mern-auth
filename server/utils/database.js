const mongoose = require('mongoose');
const dotenv = require("dotenv").config();

console.log(process.env.MONGODB_URI)
let isConnected = false;
const connectToDB=async()=>{
    mongoose.set('strictQuery',true);

    if(isConnected){
        console.log('MongoDB is already connected');
        return;
    }
    try {
        await mongoose.connect(process.env.MONGODB_URI,{
            dbName:"mern-auth",
            useNewUrlParser:true,
            useUnifiedTopology:true
        })
        isConnected=true;
        console.log('MongoDB is connected');
    } catch (error) {
        console.log(error);
    }
}

module.exports = connectToDB