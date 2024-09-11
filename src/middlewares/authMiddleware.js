const jwt = require('jsonwebtoken');
const User = require('../models/User');

const protect = async (req, res, next) => {
  let token;

  if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
    try {
      token = req.headers.authorization.split(' ')[1];

      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      req.user = await User.findById(decoded.id).select('-password');

      if (!req.user) {
        return res.status(404).json({ message: 'Usuário não encontrado' });
      }

      next();
    } catch (error) {
      res.status(401).json({ message: 'Token inválido, autorização negada' });
    }
  } else {
    res.status(401).json({ message: 'Sem token, autorização negada' });
  }
};

module.exports = { protect };
