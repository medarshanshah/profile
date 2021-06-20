const  { User ,Address } = require('../models/User')

// controller actions
module.exports.profile = (req, res) =>  {
    res.send('Complete Your Profile')
    const user = User.find()
    console.log()
}