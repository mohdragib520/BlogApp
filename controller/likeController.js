// import like and post model(because likes will be reflect on my post )

const Post=require("../model/postModel");
const Like=require("../model/likeModel");


exports.likePost=async(req,res)=>
{
    try
    {
        const{post,user}=req.body;
        const like=new Like({
            post,user,
        });

        const savedLike=await like.save();

        // update the post collection basis on likes controller
        const updatedPost=await Post.findByIdAndUpdate(post,{$push:{likes:savedLike._id}},{new:true})
        .populate("likes").exec();

        res.json({
            post:updatedPost,
        });

    }
    catch(error)
    {
        return res.status(400).json({
            error:"Error while liking post",
        }); 

    }
}


// Now we are implementing the unlike post and update post collection

exports.unlikePost=async(req,res)=>
{
    try{
        // fetch data
        const{post,like}=req.body;
        const deletedLike=await Like.findOneAndDelete({post:post,_id:like});

        // update post  collection after deleting 
        const updatedPost=await Like.findByIdAndUpdate(post,{$pull:{likes:deletedLike._id}},{new:true});

        res.json({
            post:updatedPost
        });

    }

    catch(error)
    {
        return res.status(400).json({
            error:"Error while unliking post",
        }); 

    }
}







exports.dummyLink=(req,res)=>{
    res.send("This is respons of the body  in the dummy daata of the server ");
};