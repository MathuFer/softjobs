const express = require('express');
const { registerUser } = require('../controllers/userController');
const { authMiddleware } = require('../middlewares/authMiddleware');
const router = express.Router();

router.post('/', registerUser);
router.get('/', authMiddleware, async (req, res) => {
  res.json(req.user);
});

module.exports = router;