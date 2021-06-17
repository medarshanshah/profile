const express = require('express')
const mongoose = require('mongoose')

const app = express()


// Atlas Database Connection
const dbURI = 'mongodb+srv://user:n8wiS7i922SCiz6@cluster.hc0cw.mongodb.net/usersdb';
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex:true })
.then((result) => app.listen(3000))
.catch((err) => console.log(err));


// Routes
app.get('/',(req,res) => res.send('Hello World from profile service'))
app.get('/admin',(req,res) => res.send('Hello World from admin in profile service'))
app.get('/merchants',(req,res) => res.send('Hello World from merchants in profile service'))
app.get('/users',(req,res) => res.send('Hello World from users in profile service'))

app.get('/merchant/:id',(req,res) => res.send(`Hello World from merchant ${req.params.id} in profile service`))
//app.get('/user/:id',(req,res) => res.send(`Hello World from user ${req.params.id} in profile service`))

app.get('/user/:id',(req,res) => {
    res.send(req.params.id)
})

// app.get('/user/:id/cart',(req,res) => {
//     res.send(req.params.id)
// })
