const bcrypt = require('bcryptjs');
const { createUser } = require('../models/User');

const registerUser = async (req, res) => {
  const { email, password, rol, lenguage } = req.body;

  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await createUser({ email, password: hashedPassword, rol, lenguage });
    res.status(201).json({ message: 'Usuario registrado con éxito', user: newUser });
  } catch (error) {
    res.status(500).json({ message: 'Error al registrar usuario', error });
  }
};

module.exports = { registerUser };
