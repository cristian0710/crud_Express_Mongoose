import mongoose from "mongoose";

const userSchama = new mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    lastName:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true
    },
    age:{
        type:Number,
        require:true
    }
});

export default mongoose.model('usuarios', userSchama);