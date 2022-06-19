const express = require("express");
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors')

//import routes
const searchRoute = require('./routes/search');

const db = require('./db/connection.js');

db.once('open', ()=>{
    console.log("Connected to database!");
    const server = app.listen(4000, ()=>console.log("listening"));
});

app.use(express.static("public"));
app.use(express.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(cors());

//Routes which should handle requests to API
app.use('/search', searchRoute);

const { User } = require('./models/User.js')

app.post('/users', (req, res) => {
    let user = new User(req.body)
    console.log('nice job!!')

    user.save(error=>{
        if(error) {
            res.send(500).json(error)
        } else {
            res.status(201).json({
                message: "Successfully Signed Up",
                data: user
            })
        }
    })
})

app.get('/users', (req, res) => {
    let dbQuery = User.find({})

    if(req.query.userName != undefined){
        dbQuery = User.find({"unserName": req.query.userName})
    } else if (req.query.userType != undefined) {
        dbQuery = User.find({"userType": req.query.userType})
    }
    
    dbQuery
    .sort('userName')
    .select('userName email')
    .exec((error, result) => {
        if(error) {
            res.send(500).json(error)
        } else {
            res.json(result)
        }
    })
})

//module.exports = app;