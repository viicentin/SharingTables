const mongoose = require('mongoose');

const restaurantSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String },
  cuisineType: { type: String, required: true },
  location: { type: String, required: true },
  priceRange: { type: String, required: true },
});

// Adiciona índices para melhorar a performance de consultas
restaurantSchema.index({ cuisineType: 1 });
restaurantSchema.index({ location: 1 });

const Restaurant = mongoose.model('Restaurant', restaurantSchema);

module.exports = Restaurant;
