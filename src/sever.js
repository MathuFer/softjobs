require('dotenv').config();
const express = require('express');
const app = express();
const userRoutes = require('./routes/users');
const authRoutes = require('./routes/auth');
const { loggerMiddleware } = require('./middlewares/loggerMiddleware');

app.use(express.json());
app.use(loggerMiddleware);

app.use('/usuarios', userRoutes);
app.use('/login', authRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: 'Ocurrió un error en el servidor', error: err.message });
  });
  