const express = require('express');
const {
  getAllRestaurants,
  getRestaurantById,
  createRestaurant,
  updateRestaurant,
  deleteRestaurant,
} = require('../controllers/restaurantController');
const router = express.Router();

// Rota para obter todos os restaurantes
router.get('/', getAllRestaurants);

// Rota para obter um restaurante por ID
router.get('/:id', getRestaurantById);

// Rota para criar um novo restaurante
router.post('/', createRestaurant);

// Rota para atualizar um restaurante por ID
router.put('/:id', updateRestaurant);

// Rota para deletar um restaurante por ID
router.delete('/:id', deleteRestaurant);

module.exports = router;
