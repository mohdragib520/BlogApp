// import model
const  Post=require("../model/postModel");    
const  Comment=require("../model/commentModel");


// buisness logic

exports.createComment=async(req,res)=>{
    try
    {
        // fetch data from req body

        const{post,user,body}=req.body;

        // to create the comment  object 
        const comment=new Comment({
            post,user,body

        });
        // Save the data  into database using save methods

        const savedComment=await comment.save();

        // find the post id and add the new comment in the comment array in post controller

        const updatedPost=await Post.findByIdAndUpdate(post,{$push:{comments:savedComment._id}},{new:true})
                        //   .populate("comments")
                        //   .exec();
                         
        res.json({
            post:updatedPost,
        });           
    }
    catch(error)
    {
        return res.status(500).json({
            error:"Error While creating new comments",
        });

    }
};
