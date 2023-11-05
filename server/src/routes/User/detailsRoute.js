const express = require('express');
const router = express.Router();
const detailsController = require("../../controllers/userController/detailsController");


router.get('/get-email',detailsController)

module.exports = router;