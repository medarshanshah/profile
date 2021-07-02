require('dotenv').config()
const express = require('express');
const mongoose = require('mongoose');
const swaggerJsDoc = require('swagger-jsdoc')
const swaggerUI = require('swagger-ui-express')
const authRoutes = require('./routes/authRoutes');
const cookieParser = require('cookie-parser');
const { checkAdmin, checkUser } = require('./middleware/authMiddleware');

const userRoutes = require('./routes/userRoutes')
const adminRoutes = require('./routes/adminRoutes')

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

app.get('/', (req,res) => res.send('Hello World from profile service'))
app.use(checkUser,authRoutes)
app.use('/user/profile',userRoutes)
app.use('/admin', adminRoutes)


module.exports = app