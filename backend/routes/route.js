const express = require("express")
const Wisata = require('../models/model')
const app = express();


app.get ('/wisata', async (req, res) => {
  try {
    const wisata = await Wisata.find({})
    res.status(200).json({wisata})
  } catch (error) {
    console.log(error.message)
    res.status(500).json({message: error.message})
  }
})

app.get ('/wisata/:id', async (req, res) => {
  try {
    const {id} = req.params;
    const wisata = await Wisata.findById(id)
    res.status(200).json({wisata})
  } catch (error) {
    console.log(error.message)
    res.status(500).json({message: error.message})
  }
})

app.post('/wisata', async (req,res) => {
  try {
    const wisata = await Wisata.create(req.body)
    res.status(200).json({wisata})
  } catch (error) {
    console.log(error.message)
    res.status(500).json({message: error.message})
  }
})

app.put ('/wisata/:id', async (req, res) => {
  try {
    const {id} = req.params;
    const wisata = await Wisata.findByIdAndUpdate(id, req.body)
    if(!wisata){
      return res.status(404).json({message: `cannot find any product with ID ${id}`})
    }
    const wisataUpdated = await Wisata.findById(id)
    res.status(200).json({wisataUpdated})
  } catch (error) {
    console.log(error.message)
    res.status(500).json({message: error.message})
  }
})



app.delete ('/wisata/:id', async (req, res) => {
  try {
    const {id} = req.params;
    const wisata = await Wisata.findByIdAndDelete(id)
    if(!wisata){
      return res.status(404).json({message: `cannot find any product with ID ${id}`})
    }
    res.status(200).json({message: "Data is Deleted"})
  } catch (error) {
    console.log(error.message)
    res.status(500).json({message: error.message})
  }
})

module.exports = app