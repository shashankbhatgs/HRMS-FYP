const express = require('express');
const router = express.Router();
const registerController = require("../../controllers/authController/registerController");


router.post('/faculty-register',registerController)

module.exports = router;