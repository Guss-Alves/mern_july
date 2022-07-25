const PetController = require('../controllers/pet.controller');

module.exports = (app)=>{
    app.get('/api/pets', PetController.showAllPets),
    app.get('/api/pet/:id', PetController.showOnePet),
    app.post('/api/pet/new', PetController.createPet),
    app.put('/api/pet/edit/:id', PetController.updatePet),
    app.delete('/api/pet/delete/:id', PetController.deletePet)
}