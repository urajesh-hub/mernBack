import mongoose from "mongoose";

const postSchema=mongoose.Schema({
    empcode:{
        type:Number,required:true
    },
    empname:{
        type:String,required:true
    },
    age:{
        type:Number,required:true
    },
    city:{
        type:String,required:true
    },
},

{timestamps:true}

)
const Post=mongoose.model("Post",postSchema);

export default Post;