const {user, post}= require("../models");


const createUser = async(req, res)=>{
    try{
        const {firstName,lastName, email, gender} = req.body
        const create = await user.create({
            firstName, lastName, email, gender
        })
        
        res.status(201).json({
            message : "User created successfully",
            user : create
        })
    }
    catch(error){
        res.status(500).json({
            message : "We encoutered a server error ",
            error : error.message
        })
    }
}

const getallUsers = async(req, res)=>{
    try{
        const allUsers = await user.findAll({
            include:{
                model : post,
                attributes : ["title","body"]
            }
        }
    )
    res.status(200).json({
        message : `We have ${allUsers.length} user in our database`,
        user: allUsers
    })
    }
    catch(error){
        res.status(500).json({
            message : "We encountered a serve error",
            error : error.message
        })
    }
}


const getoneUser = async(req, res)=>{
    try{
        const id = req.params.id
        const oneUser = await user.findOne({where : {id}})

        if(!oneUser){
            return  res.status(404).json({
                message : "User not found"
            })
        }
        res.status(200).json({
            message : "User found successfully",
            user: oneUser
        })
    }
    catch(error){
        res.status(500).json({
            message : "We encountered a server error",
            error : error.message
        })
    }
}


const updateUser = async (req, res)=>{
    try{

        const id = req.params.id
        const finder = await user.findByPk(id)

        if(!finder){
            return  res.status(404).json({
                message: "User not found"
            })
        }
        const {firstName, lastName, email, gender} = req.body
        const updated = await user.update({firstName, lastName, email, gender}, {where: {id}})
        
        return res.status(201).json({
            message : "User updated successfully",
            data : updated
        })
    }
    catch(error){
        res.status(500).json({
            message : "We encountered a server error",
            error : error.message
        })
    }
}


const deleteUser = async (req, res)=>{
    const id = req.params.id
    const finder = await user.findByPk(id)

    if(!finder){
        return  res.status(404).json({
            message : "User not found"
        })
    }
    const deleted = await user.destroy({where :{id}})
    res.status(200).json({
        message : "User deleted successfully",
        user : deleted
    })
}

module.exports = {createUser,getallUsers,getoneUser,updateUser,deleteUser}