import cors from 'cors';
import mongoose from 'mongoose';
import express from 'express';
require('dotenv').config();

import skillRoutes from './routes/skillRoutes.js';

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGODB_URI)
    .then(()=> { console.log("mongodb is connected") })
    .catch((e)=> { console.log("mongodb not connected") });

app.use("/skill", skillRoutes);

app.listen(2222, ()=>{
    console.log("here is my link := http://localhost:2222");
});
