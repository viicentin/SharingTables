const express = require('express');
const { expressInterest, getMatches } = require('../controllers/interestController');
const router = express.Router();


const { protect } = require('../middlewares/authMiddleware');

// Rota para expressar interesse em um restaurante
router.post('/', expressInterest);

// Rota para obter matches de um usuário
router.get('/matches/:userId', getMatches);

module.exports = router;
