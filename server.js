import express from 'express'
import connect_db from './src/config/db.js';
import axios from 'axios';
import router from './src/routes/githubRoutes.js';
import dotenv from 'dotenv'
dotenv.config();

const app=express();
app.use(express.json());
await connect_db();

app.use("/api/github", router);

app.get("/",(req,res)=>{
    res.send("this is the first get method");

});


app.listen(process.env.PORT,()=>{
    console.log(`port number running at ${process.env.PORT}`);
});

