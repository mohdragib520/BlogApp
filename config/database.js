const mongoose=require('mongoose');
require("dotenv").config();

const connectWithDb=()=>{
    mongoose.connect(process.env.DATABASE_URL,{
        useNewUrlParser:true,
        useUnifiedtopology:true,
    }).then(console.log("Database connrcted successfully"))
    .catch((error)=>{
        console.log("Databse facing some issue");
        console.log(error)
        process.exit(1);
    })

};

module.exports=connectWithDb;