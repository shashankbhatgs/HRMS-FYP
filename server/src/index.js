const app = require("express")()
const bodyParser = require("body-parser")
const cors = require("cors")
const PORT = 3000
const mongoose = require('mongoose')



app.use(cors())
app.use(bodyParser.json());


// Mongoose Connection
mongoose.connect('mongodb://localhost:27017/facultyDB')

const loginRoute = require('./routes/auth/loginRoute')
const registerRoute = require('./routes/auth/registerRoute')
const getDetailsRoute = require('./routes/User/detailsRoute')


// All routes
app.post('/faculty-login',loginRoute);
app.post('/faculty-register',registerRoute);
app.get('/get-email',getDetailsRoute)


app.listen(PORT, ()=>{
    console.log(`Listening on port ${PORT}`);
})