const express = require('express');
const { registerUser, authUser, getUserProfile } = require('../controllers/userController');
const { protect } = require('../middlewares/authMiddleware');
const router = express.Router();

// Rota para registrar um novo usuário com validação
router.post('/register', registerUser);

// Rota para autenticar um usuário com validação
router.post('/login', authUser);

// Rota para obter o perfil do usuário (protegida)
router.get('/profile', protect, getUserProfile);

module.exports = router;
