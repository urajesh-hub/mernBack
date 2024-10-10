import Post from "../model/postModel.js";


// GET POSTS ( ALL RECORDS)

const getPosts=async (req,res)=> {
       
    try {
        const posts = await Post.find({}).select("-__v");  // hide select("-__v") removed database last column
        // console.log(posts);
        res.status(200).json(posts);
      } catch (error) {
        console.log(error);
        res.status(500).json({ message: error.message });
      }
}


// CREATE POST

const createPost=async (req,res)=> {
        const {empcode,empname,age,city}=req.body
        // console.log(empcode,empname,age,city);
        try {
            const post=await Post.create({empcode,empname,age,city})
            res.status(201).json({message:"Post Created Sucessfully"})
        } catch (error) {
            console.log(error.message)
            res.status(500).json({message:error.message })
            
        }
           
        
    }

// GET POST ( SINGLE RECORDS)

const getsinglePost=async (req,res)=> {
    const { id } = req.params;  // for get id from db must in params
  try {
    const post = await Post.findById(id).select("-__v");
    if (!post) {
      return res.status(404).json({ message: "Post Not Found" });
    }
    res.status(200).json({ post });
  } catch (error) {
    if (error.name === "CastError" && error.kind === "ObjectId") {
      return res.status(400).json({ message: "Invalid post ID" });
    }
    res.status(500).json({ message: error.message });
  }
       
    
}

// UPDATE POST 

const updatePost=async (req,res)=> {

    const { id } = req.params;
  try {
    const post = await Post.findById(id);
    if (!post) {
      return res.status(404).json({ message: "Post Not Found" });
    }
    post.empcode = req.body.empcode || post.empcode;
    post.empname = req.body.empname || post.empname;
    post.age = req.body.age || post.age;
    post.city = req.body.city || post.city;

    const updatePost = await post.save();
    res.status(200).json({
      id: updatePost._id,
      empcode: updatePost.empcode,
      empname: updatePost.empname,
      age: updatePost.age,
      city: updatePost.city,
    });
  } catch (error) {
    if (error.name === "CastError" && error.kind === "ObjectId") {
      return res.status(400).json({ message: "Invalid post ID" });
    }
    res.status(500).json({ message: error.message });
  }
       
    
}

// DELETE POST 

const deletePost=async (req,res)=> {
    const { id } = req.params;
    try {
      const post = await Post.findByIdAndDelete(id);
      if (!post) {
        return res.status(404).json({ message: "Post not found" });
      }
      res.status(200).json({ message: "Post deleted successfully" });
    } catch (error) {
      if (error.name === "CastError" && error.kind === "ObjectId") {
        return res.status(400).json({ message: "Invalid post ID" });
      }
      res.status(500).json({ message: error.message });
    }
       
    
}


export{getPosts,createPost,getsinglePost,updatePost,deletePost}