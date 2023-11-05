const express = require('express');
const router = express.Router();
const loginController = require("../../controllers/authController/loginController");

router.post('/faculty-login', loginController);

module.exports = router;
