const mongoose = require('mongoose');

const interestSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  restaurant: { type: mongoose.Schema.Types.ObjectId, ref: 'Restaurant', required: true },
});

// Adiciona um índice composto para melhorar a performance de consultas
interestSchema.index({ user: 1, restaurant: 1 });

const Interest = mongoose.model('Interest', interestSchema);

module.exports = Interest;
