const Interest = require('../models/Interest');
const User = require('../models/User');
const Restaurant = require('../models/Restaurant');

const expressInterest = async (req, res) => {
  try {
    const { userId, restaurantId } = req.body;

    // Validações
    if (!userId || !restaurantId) {
      return res.status(400).json({ message: 'ID do usuário e restaurante são obrigatórios' });
    }

    // Verifica se o usuário e o restaurante existem
    const user = await User.findById(userId);
    const restaurant = await Restaurant.findById(restaurantId);

    if (!user || !restaurant) {
      return res.status(404).json({ message: 'Usuário ou restaurante não encontrado' });
    }

    const interest = new Interest({ user: userId, restaurant: restaurantId });
    await interest.save();

    res.status(201).json(interest);
  } catch (error) {
    res.status(400).json({ message: 'Erro ao expressar interesse' });
  }
};

const getMatches = async (req, res) => {
  try {
    const { userId } = req.params;

    // Validação
    if (!userId) {
      return res.status(400).json({ message: 'ID do usuário é obrigatório' });
    }

    const userInterests = await Interest.find({ user: userId }).populate('restaurant');
    const restaurantIds = userInterests.map(interest => interest.restaurant._id);

    const matches = await Interest.find({ restaurant: { $in: restaurantIds } }).populate('user');
    const matchedUsers = matches.map(match => ({
      user: match.user,
      restaurant: match.restaurant,
    }));

    res.json(matchedUsers);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao buscar matches' });
  }
};

module.exports = { expressInterest, getMatches };

