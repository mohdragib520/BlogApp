const express=require("express");
const router=express.Router();



// import with constroller
const{dummyLink,likePost,unlikePost}=require("../controller/LikeController");  
const{createComment}=require("../controller/CommentController");
const{createPost, getAllPost}=require("../controller/PostController");

 

// maping create 
router.get("/dummyroute",dummyLink);
router.post("/comments/create",createComment)
router.post("/post1/create",createPost)
router.get("/posts",getAllPost)
router.post("/likes/like",likePost);
router.post("/likes/unlike",unlikePost);



// export
module.exports=router;
