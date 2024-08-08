const pool = require('../config/database');

const findUserByEmail = async (email) => {
  const { rows } = await pool.query('SELECT * FROM usuarios WHERE email = $1', [email]);
  return rows[0];
};

const createUser = async ({ email, password, rol, lenguage }) => {
  const { rows } = await pool.query(
    'INSERT INTO usuarios (email, password, rol, lenguage) VALUES ($1, $2, $3, $4) RETURNING *',
    [email, password, rol, lenguage]
  );
  return rows[0];
};

module.exports = { findUserByEmail, createUser };
