const Pet = require('../models/pets.model');

module.exports.showAllPets = (req, res)=>{
    Pet.find()
        .then(allPets =>{res.json({results: allPets})})
        .catch(error => {res.json (error)})
}

module.exports.showOnePet = (req, res)=>{
    Pet.findOne({_id:req.params.id})
    .then(onePet =>{res.json({results: onePet})})
    .catch(error => {res.json (error)})
}

module.exports.createPet = (req, res)=>{
    Pet.create(req.body)
        .then(newPet => {res.json({results: newPet})})
        .catch(error => {res.json (error)})
}

module.exports.updatePet = (req, res) =>{
    Pet.findOneAndUpdate(
        {_id:req.params.id},
        req.body,
        {new: true , runValidators: true})
            .then(updatedPet => {res.json({results: updatedPet})})
            .catch(error => {res.json (error)})
}

module.exports.deletePet = (req, res)=>{
    Pet.findOneAndDelete({_id:req.params.id})
        .then(deletedPet => {res.json({results: deletedPet})})
        .catch(error =>{res.json(error)})
}