// const mongoose = require('mongoose');
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();
mongoose.connect(process.env.mongo_url);

const connection =mongoose.connection;

connection.on("error", ()=>{
    console.log("Error connecting to database");
});

connection.on("connected",()=>{
    console.log("Mongodb connection successful");
});

// module.exports=connection;
export default connection;