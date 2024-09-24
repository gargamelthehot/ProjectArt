const express = require('express')
const mongoose = require('mongoose')
const app = express()

const connectdb=async()=>{
    try{await mongoose.connect("mongodb+srv://gargamel:meandme@cluster0.oyxqh.mongodb.net/art")
        console.log("success")
    }
    catch(error){console.error("fail")}
    
}

connectdb();


app.listen("3000", () => {
  console.log("server is running")
})


