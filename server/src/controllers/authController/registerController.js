const express = require('express');
const router = express.Router();
const User = require('../../models/user.model');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

router.post('/faculty-register', async (req, res) => {
           try{
                const hashedPassword = await bcrypt.hash(req.body.password,10)
                const user = await User.create({
                    email:req.body.email,
                    password:hashedPassword,
                })

                res.json({ status:'ok' })
            }catch (err) {
                console.log(err);
                res.json({ status:'error' })
            }
});

module.exports = router;

// app.post('/faculty-register',async(req,res)=>{
//     try{
//         const hashedPassword = await bcrypt.hash(req.body.password,10)
//         const user = await User.create({
//             email:req.body.email,
//             password:hashedPassword,
//         })

//         res.json({ status:'ok' })
//     }catch (err) {
//         console.log(err);
//         res.json({ status:'error' })
//     }
// })
