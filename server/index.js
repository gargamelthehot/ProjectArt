const express = require('express')
const mongoose = require('mongoose')
const path = require('path');
const app = express()
app.use(express.json());

const cors = require('cors');
app.use(cors());

const connectdb = async () => {

  try {
    await mongoose.connect("mongodb+srv://gargamel:meandme@cluster0.oyxqh.mongodb.net/art")
    console.log("success")
  } catch (error) {
    console.error("fail")
  }
}

connectdb();

// הגדרת נתיב לתיקיית הסטטיים
app.use(express.static(path.join(__dirname, 'Public')));

const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: true }))
// הגדרת נתיב לבית
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'Public', 'mainp.html'));
});


const usersRoutes = require("./routes/usersRoutes");
const productsRoutes = require("./routes/productsRoutes");
app.use("/users",usersRoutes);
app.use("/products",productsRoutes);

app.listen("3000", () => {
  console.log("server is running")
})


