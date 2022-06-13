const express = require("express");
const app = express();

const db = require('./db/connection.js');

db.once('open', ()=>{
    console.log("Connected to database!");
    const server = app.listen(8080, ()=>console.log("listening"));
});

app.use(express.static("public"));
app.use(express.urlencoded({extended:true}));

const { User } = require('./models/User.js')

app.post('/users', (req, res) => {
    let user = new User(req.body)
})

app.get('/', (req,res)=>{
 
    res.sendFile('index.html', {root: __dirname})

});

app.get('/signup', (req,res)=>{
 
    res.sendFile('index.html', {root: __dirname})

});