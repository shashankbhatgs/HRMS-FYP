const app = require("express")()
const bodyParser = require("body-parser")
const cors = require("cors")
const PORT = 3000
const mongoose = require('mongoose')
const User = require('./models/user.model')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')

app.use(cors())
app.use(bodyParser.json());

//app.use(express.json())

mongoose.connect('mongodb://localhost:27017/facultyDB')


app.post('/faculty-register',async(req,res)=>{
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
})


app.post('/faculty-login',async(req,res)=>{
        const user = await User.findOne({
            email:req.body.email,
        })

        const isPasswordValid = await bcrypt.compare(req.body.password,user.password)
    
        if(isPasswordValid){
            const token = jwt.sign({
                email:req.body.email,
            },'JSSSTUHRMS')
            return res.json({status:"ok", user:token})
        }else{
            return res.json({staus:'error',user:false})
        }
})

app.get('/get-email',(req,res)=>{
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
})


app.listen(PORT, ()=>{
    console.log(`Listening on port ${PORT}`);
})