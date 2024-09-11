const Restaurant = require('../models/Restaurant');

const getAllRestaurants = async (req, res) => {
  try {
    const restaurants = await Restaurant.find();
    res.json(restaurants);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao buscar restaurantes' });
  }
};

const getRestaurantById = async (req, res) => {
  try {
    const restaurant = await Restaurant.findById(req.params.id);
    if (!restaurant) {
      return res.status(404).json({ message: 'Restaurante não encontrado' });
    }
    res.json(restaurant);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao buscar restaurante' });
  }
};

const createRestaurant = async (req, res) => {
  try {
    const { name, description, cuisineType, location, priceRange } = req.body;

    // Validação
    if (!name || !cuisineType || !location || !priceRange) {
      return res.status(400).json({ message: 'Todos os campos obrigatórios devem ser preenchidos' });
    }

    const restaurant = new Restaurant({ name, description, cuisineType, location, priceRange });
    await restaurant.save();
    res.status(201).json(restaurant);
  } catch (error) {
    res.status(400).json({ message: 'Erro ao criar restaurante' });
  }
};

const updateRestaurant = async (req, res) => {
  try {
    const restaurant = await Restaurant.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!restaurant) {
      return res.status(404).json({ message: 'Restaurante não encontrado' });
    }
    res.json(restaurant);
  } catch (error) {
    res.status(400).json({ message: 'Erro ao atualizar restaurante' });
  }
};

const deleteRestaurant = async (req, res) => {
  try {
    const restaurant = await Restaurant.findByIdAndDelete(req.params.id);
    if (!restaurant) {
      return res.status(404).json({ message: 'Restaurante não encontrado' });
    }
    res.json({ message: 'Restaurante deletado' });
  } catch (error) {
    res.status(500).json({ message: 'Erro ao deletar restaurante' });
  }
};

module.exports = {
  getAllRestaurants,
  getRestaurantById,
  createRestaurant,
  updateRestaurant,
  deleteRestaurant,
};

