const mongoose = require('mongoose');

const PetSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "The pet's name is required"],
        minlength: [3, "The pet's name must be at least 3 characters long"]
    },
    type: {
        type : String,
        required: [true, "The pet's type is required"],
        minlength: [3, "The pet's type must be at least 3 characters long"]
    },
    description : {
        type : String,
        required: [true, "A description for the pet is required"],
        minlength: [3, "The pet's description must be at least 3 characters long"]
    },
    skillOne : {
        type: String
    },
    skillTwo : {
        type: String
    },
    skillThree : {
        type: String
    }
})

const Pet = mongoose.model('Pet', PetSchema)

module.exports = Pet;