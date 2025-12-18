// librarys 
import cors from 'cors';
import mongoose from 'mongoose';
import express from 'express';

// env setup
import dotenv from "dotenv";
dotenv.config();

// connection file
import { connectDB } from './db/connectDB.js';

// other files
import skillRoutes from './routes/skillRoutes.js';

// app init.
const app = express();
app.use(cors());
app.use(express.json());

// await for connection 
await connectDB();

app.use("/skill", skillRoutes);

app.listen(2222, ()=>{
    console.log("here is my link := http://localhost:2222");
});
