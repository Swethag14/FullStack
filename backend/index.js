var express = require('express');
var path = require('path');
var mdb = require('mongoose');
//import users from './Models/users';
var User=require('./Models/users')
var app = express();
const PORT = 3001;
app.use(express.json())
mdb.connect("mongodb://127.0.0.1:27017/").then(() => {
    console.log("MongoDB Connection Successful")
}).catch(() => {
    console.log("Check your Connection String")
})
app.post('/signup',(req,res)=>{
    console.log(req.body);
    var {firstName,lastName,email} = req.body
    console.log(firstName,lastName,email);
    try
        {
            var newUser = new User({
                firstName:firstName,
                lastName:lastName,
                email:email
            })
            newUser.save()
            console.log("User added successfully");
            res.status(200).send("User added successfully")
        }
        catch(err){
            console.log(err);
        }
    res.send("hello")
})
app.get('/getsignup',(req,res)=>{
    try{
         var allSignupRecords = User.find()
         res.json(allSignupRecords)
         console.log("Data fetched")
    }
    catch(err){
        console.log(err);
            res.send(err)

    }

})
app.listen(PORT, () => {
    console.log(`Backend Server Started\n URL : http://localhost:${PORT}`)
})

app.get('/', (req, res) => {
    res.send("Welcome to backend")
})
app.get('/json', (req, res) => {
    res.send({ server: "Welcome", url: "localhost", port: PORT })

})

app.get('/static', (req, res) => {
    console.log(__dirname);
    res.sendFile(path.join(__dirname, 'index.html'))
})