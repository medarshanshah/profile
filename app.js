require('dotenv').config()
const express = require('express');
const mongoose = require('mongoose');
const swaggerJsDoc = require('swagger-jsdoc')
const swaggerUI = require('swagger-ui-express')
const authRoutes = require('./routes/authRoutes');
const cookieParser = require('cookie-parser');
const { requireAuth, checkUser } = require('./middleware/authMiddleware');

const userRoutes = require('./routes/userRoutes')

const PORT = process.env.PORT
const app = express();

// middleware
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cookieParser());


//Swagger
const swaggerOptions = {
    swaggerDefinition: {
        openapi: '3.0.0',
        info: {
            title: 'Profile API',
            version: '1.0.0',
            description: 'Profile Microservice',
            contact: {
                name: "Darshan"
            },
            servers: ['http://localhost:3000']
        }

    },
    apis: ['./routes/*.js']
}

const swaggerDocs = swaggerJsDoc(swaggerOptions)
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDocs))


// Atlas Database Connection
const dbURI = process.env.MONGODB_URI
mongoose.connect(dbURI, { useFindAndModify: false, useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex:true })
.then((result) => {
    app.listen(PORT, console.log('Listening to profile service at port '+PORT))
})
.catch((err) => console.log(err));

// routes
app.get('*', checkUser);
app.get('/', (req,res) => res.send('Hello World from profile service'))
app.get('/users', requireAuth ,(req,res) => res.send('User has logged in'))
app.use(authRoutes)
app.use(userRoutes)



// const PORT = process.env.PORT
// const app = express()

// //middlewares
// app.use(express.static('public'))
// app.use(express.json())
// app.use(cookieParser())


// app.set('view engine', 'ejs')




// // Routes

// app.get('*', checkUser);
// app.get('/', (req, res) => res.render('home'));
// app.get('/smoothies', requireAuth, (req, res) => res.render('smoothies'));
// app.use(authRoutes)



// app.get('/', requireAuth, (req,res) => res.send('Hello World from profile service'))
// app.get('/admin',(req,res) => res.send('Hello World from admin in profile service'))
// app.get('/merchants',(req,res) => res.send('Hello World from merchants in profile service'))
// app.get('/users',(req,res) => res.send('Hello World from users in profile service'))

// app.get('/merchant/:id',(req,res) => res.send(`Hello World from merchant ${req.params.id} in profile service`))
// //app.get('/user/:id',(req,res) => res.send(`Hello World from user ${req.params.id} in profile service`))

// app.get('/user/:id',(req,res) => {
//     res.send(req.params.id)
// })

// // app.get('/user/:id/cart',(req,res) => {
// //     res.send(req.params.id)
// // })
