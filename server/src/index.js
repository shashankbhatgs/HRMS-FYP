const app = require("express")()
const bodyParser = require("body-parser")
const cors = require("cors")
const PORT = 3000

app.use(cors())
app.use(bodyParser.json());

app.get("/", (req, res)=>{
    res.json({
        "hello": "world",
    })
})

app.get("/dummy", (req, res)=>{
    res.json({
        "name": "naanu",
        "age": 103,
    })
})

app.listen(PORT, ()=>{
    console.log(`listening on port ${PORT}`);
})