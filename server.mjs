import dotenv from 'dotenv';
import dbConfig from './config/dbConfig.mjs';
import express from 'express';
import portfolioRoute from "./routes/portfolioRoute.mjs"; 
dotenv.config();
const app=express();
import cors from 'cors';
app.use(cors());

app.use(express.json());
app.use("/api/portfolio",portfolioRoute);

const port =process.env.PORT || 3000;
app.listen(port,()=>{
    console.log(`server running on port ${port}`);
});






// const express=require('express');
// require("dotenv").config();
// const dbConfig=require("./config/dbConfig");