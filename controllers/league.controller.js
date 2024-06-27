const League = require("../models/league.model.js");

const createLeague = async (req, res) => {
    const league = new League(req.body)
    try {
        await league.save()
        console.log("League created successfully!");
        res.status(201).json(league)
    } catch(error){
        res.status(400).json({message: error.message})
    }
}

const updateLeague = async (req, res) => {
    try {
        const league = await League.findByIdAndUpdate(req.params.id, req.body, {new: true, runValidators: true})
        if(!league) return res.status(404).json({message: "League not found"})
        console.log("League updated successfully!");
        res.status(200).json(league)
    } catch(error){
        res.status(400).json({message: error.message})
    }
}


const getLeague = async (req, res) => {
    try {
        const league = await League.findById(req.params.id)
        if(!league) return res.status(404).json({message: "League not found"})
        console.log("League fetched successfully!");
        res.status(200).json(league)
    } catch(error){
        res.status(500).json({message: error.message})
    }
}

const getLeagueByName = async (req, res) => {
    try {
        const league = await League.findById(req.params.id.name)
        if(!league) return res.status(404).json({message: "League not found"})
        console.log("League fetched successfully!");
        res.status(200).json(league)
    } catch(error){
        res.status(500).json({message: error.message})
    }
}

const getAllLeagues = async (req, res) => {
    try {
        const league = await League.find()
        console.log("All League fetched successfully!");
        res.status(200).json(league)
    } catch(error){
        res.status(500).json({message: error.message})
    }
}

module.exports = {
    createLeague,
    getLeague,
    getAllLeagues,
    getLeagueByName,
    updateLeague
}