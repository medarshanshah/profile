const User = require('../models/User')
const axios = require('axios')

module.exports.get_allUsers = async (req, res) => {
    try{
        const users = await User.find()
        res.status(200).json(users)
    } catch(err){
        res.status(400).send(err)
    }
}

module.exports.get_allCarts = async (req, res) => {
    try {
        let carts = await axios.get('http://localhost:7000/cart/admin')
        res.status(200).json()
    } catch (err) {
        res.status(400).send(err)
    }
}

module.exports.get_allOrders = (req, res) => {
    
}