const {post, user} = require ("../models");

const createPost = async(req, res)=>{
    try{
const {title,body,userId} = req.body
const created=await post.create({
    title,body,userId
})
res.status(201).json({
    message : "Post created successfully",
    data: created
})
    }catch(error){
        res.status(500).json({
            message : "Error creating file",
            error: error.message 
        })
    }
}

const allPost = async(req,res)=>{
    try{
        const finder = await post.findAll({
            include : {
                model : user,
                attributes : ["firstName", "lastName", "email"]
            }
        })
        res.status(200).json({
            message :`We have ${finder.length}post in our database`,
            data : finder
        })
    }catch(error){
        res.status(500).json({
            message : "We encountered a server error",
            error : error.message
        })
    }
}


const deletePost = async(req,res)=>{
    try{
        const id=req.params.id
        const finder = await post.findByPk(id)
        if(!finder){
            return res.status(404).json({
                message : 'Page not found'
            })
        }
        const deleted = await post.destory({where:{id}})
        res.status(200).json({
            message : 'Post has been deleted successfully',
            data : deleted
        })
    }catch(error){
        res.status(500).json({
            message : "We encountered a server error",
            error : error.message
        })
    }
}

const updatePost = async(req,res)=>{
    try{
        const id = req.params.id
        const finder = await post.findByPk(id)

        if (!finder){
            return res.status(404).json({
                message : "Page not found"
                
            })
        }
        const {title, body} = req.body
        const updated = await post.update({title,body},{where:{id}})

        res.status(200).json({
            message : "Page updated successfully",
            data : updated
        })
    }
    catch(error){
        res.status(500).json({
            message : "We encountered a server error",
            error: error.message
        })
    }
}



module.exports = {
    createPost,
    deletePost,
    allPost,
    updatePost
}