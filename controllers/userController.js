const  User = require('../models/User')

// controller actions
module.exports.get_profile = async (req, res) =>  {
    const userId = req.cookies['userId']

    try {
        const user = await User.findById({_id:userId})
        res.status(200).json(user)
    } catch (err) {
        res.status(400).send('Unable to get user')
    }

}

module.exports.complete_profile = async (req, res) => {
    const userId = req.cookies['userId']
    username = req.body.name
    address = req.body.address
    
    try {
        const user = await User.findByIdAndUpdate({_id:userId},{name:username, address})
        res.status(200).send('profile complete')
    } catch (err) {
        res.status(400).send('unable to complete profile')
    }

    console.log()
}