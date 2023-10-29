// import post model

const Post=require("../model/postModel");

// Buisnes Logic

exports.createPost=async(req,res)=>
{
    try
    {
        const {title,body}=req.body;
        const post=new Post({
            title,body,
        });
        const savedPost=await post.save();

        res.json({
            post:savedPost,
        });
    }
    catch(error)
    {
        return  res.status(500).json({
            error:"Error while craeting the post",
        });
    }
};


// now we are going to fetching the post from get request 
// NOTE I have to testing after completing the likes constroller then  check populate function

exports.getAllPost=async(req,res)=>
{
    try
    {
        const posts=await Post.find();
        res.json({
            posts
        })

    }
    catch(error)
    {
        return  res.status(500).json({
            error:"Error while craeting the post",
        });

    }
};
