const User = require("../models/user.model.js");

const createUser = async (req, res) => {
    const user = new User(req.body)
    try {
        await user.save()
        console.log("User created successfully!");
        res.status(201).json(user)
    } catch(error){
        res.status(400).json({message: error.message})
    }
}


const getUser = async (req, res) => {
    try {
        const user = await User.findById(req.params.id)
        if(!user) return res.status(404).json({message: "User not found"})
        console.log("User fetched successfully!");
        res.status(200).json(user)
    } catch(error){
        res.status(500).json({message: error.message})
    }
}

const getAllUsers = async (req, res) => {
    try {
        const user = await User.find()
        console.log("All User fetched successfully!");
        res.status(200).json(user)
    } catch(error){
        res.status(500).json({message: error.message})
    }
}


const updateUser = async (req, res) => {
    try {
        const user = await User.findByIdAndUpdate(req.params.id, req.body, {new: true, runValidators: true})
        if(!user) return res.status(404).json({message: "User not found"})
        console.log("User updated successfully!");
        res.status(200).json(user)
    } catch(error){
        res.status(400).json({message: error.message})
    }
}

module.exports = {
    createUser,
    getUser,
    getAllUsers,
    updateUser
}