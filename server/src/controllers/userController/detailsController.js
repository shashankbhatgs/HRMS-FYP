const express = require('express');
const router = express.Router();
const User = require('../../models/user.model');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

router.get('/get-email', async (req, res) => {
        const token = req.headers.authorization;

        if(!token){
            return res.status(401).json({error:'Unauthorized'});
        }

        jwt.verify(token.replace('Bearer ',''),'JSSSTUHRMS',(err,decoded)=>{
            if(err){
                return res.status(401).json({ error: 'Token verification failed' });
            }
            res.json({email:decoded});
        })
});

module.exports = router;
