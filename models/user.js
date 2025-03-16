const mongoose=require('mongoose');
const UserSchema=new mongoose.Schema({
    name:{
        type:String,
        // required:true
    },
    email:{
        type:String,
        // required:true
    },
    username:{
        type:String,
        // required:true
    },
    password:{
        type:String,
        // required:true
    },
    confirmpassword:{
        type:String,
        // required:true
    },
    image:{
        type:String,
        // required:true
    },
    otp:{
        type:String,
        // required:true
    },
    languages:{
        type:[String],
        // required:true
    }
})
module.exports=mongoose.model("User",UserSchema);

