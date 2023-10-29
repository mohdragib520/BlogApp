const express=require('express');
const app=express();

const expres=require("express");
const PORT=process.env.PORT|| 4000;

app.use(expres.json());

const blog =require("./routes/blog");

// mount the port using app function
app.use("/api/v1",blog);

//to connnect the database of the connecteddb

const connecteddb=require("./config/database");
connecteddb();


// This is step for the start the server


app.listen(PORT,()=>{
    console.log(`App is started  is at port no is ${PORT}`);

})

// default router we are adding on the server 

app.get("/",(req,res)=>{
    res.send("<h1>This is homepage testing </h1>")
})


