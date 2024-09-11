const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const userRoutes = require('./src/routes/userRoutes');
const restaurantRoutes = require('./src/routes/restaurantRoutes');
const interestRoutes = require('./src/routes/interestRoutes');

dotenv.config();

const app = express();
const server = http.createServer(app);
const io = socketIo(server);
const cors = require('cors');

app.use(cors());

app.use(express.json());

app.use('/api/users', userRoutes);
app.use('/api/restaurants', restaurantRoutes);
app.use('/api/interests', interestRoutes);

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Conectado ao MongoDB'))
  .catch(err => console.error('Erro ao conectar ao MongoDB:', err));

// Configuração do Socket.IO
io.on('connection', (socket) => {
  console.log('Novo cliente conectado');

  socket.on('message', (msg) => {
    io.emit('message', msg);
  });

  socket.on('disconnect', () => {
    console.log('Cliente desconectado');
  });

  // Adiciona tratamento de erros no Socket.IO
  socket.on('error', (err) => {
    console.error('Socket.IO Error:', err);
  });
});

const PORT = process.env.PORT || 5001;
server.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});

app.get('/', (req, res) => {
  res.send({ message: 'hello' });
});