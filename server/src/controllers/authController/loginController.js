const express = require('express');
const router = express.Router();
const User = require('../../models/user.model');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

router.post('/faculty-login', async (req, res) => {
        const user = await User.findOne({
            email: req.body.email,
        });

        if (!user) {
            return res.status(400).json({ status: 'error', user: false });
        }

        const isPasswordValid = await bcrypt.compare(req.body.password, user.password);

        if (isPasswordValid) {
            const token = jwt.sign({ email: req.body.email }, 'JSSSTUHRMS');
            return res.json({ status: 'ok', user: token });
        } else {
            return res.status(400).json({ status: 'error', user: false });
        }
});

module.exports = router;
