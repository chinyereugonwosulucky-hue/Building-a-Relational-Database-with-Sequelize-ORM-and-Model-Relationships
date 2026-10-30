const express = require ("express");
const router = express.Router();
const {createPost,allPost,deletePost,updatePost} = require ("../controller/posTcontroller");



router.get("/allpost",allPost);
router.post("/createpost", createPost);
router.put("/updatepost/:id", updatePost);
router.delete("/deletepost/:id", deletePost);


module.exports = router;