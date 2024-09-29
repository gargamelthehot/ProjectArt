const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    firstName: {
        type:String,
        require:true
    },
    lastName: String,
    email: {
        type:String,
        require:true
    },
});
//יצוא הפונקציה
module.exports = mongoose.model("User", UserSchema);