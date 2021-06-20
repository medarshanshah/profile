const mongoose = require('mongoose');
const { isEmail, isMobilePhone } = require('validator');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, 'Please enter an email'],
    unique: true,
    lowercase: true,
    validate: [isEmail, 'Please enter a valid email']
  },
  password: {
    type: String,
    required: [true, 'Please enter a password'],
    minlength: [6, 'Minimum password length is 6 characters'],
  },
  name: {
    type: String,
    required: [true, 'Please enter your name'],
  },
   phone: {
    type: String,
    unique: true,
    validate: [isMobilePhone, 'Please enter a valid phone number']
  },
  userType: {
    type: String,
    lowercase: true
  },
  address: {
    type: Array
  }
});

const addressSchema = new mongoose.Schema({
    pincode: {
        type: String
    },
    city: {
        type: String
    },
    address1: {
        type: String
    },
    state:{
        type: String
    },
    country: {
        type: String
    }
})


// fire a function before doc saved to db
userSchema.pre('save', async function(next) {
  const salt = await bcrypt.genSalt();
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

// static method to login user
userSchema.statics.login = async function(email, password) {
  const user = await this.findOne({ email });
  if (user) {
    const auth = await bcrypt.compare(password, user.password);
    if (auth) {
      return user;
    }
    throw Error('incorrect password');
  }
  throw Error('incorrect email');
};

const User = mongoose.model('user', userSchema);
const Address = mongoose.model('address', addressSchema)

module.exports = { User, Address }







// const mongoose = require('mongoose')
// const { isEmail, isMobilePhone } = require('validator')
// const bcrypt = require('bcrypt')

// const userSchema = new mongoose.Schema({
//     name: {
//         type: String,
//         required: [true, 'Please enter your name'],
//     },
//     phone: {
//         type: String,
//         unique: true,
//         required: [true, 'Please enter your phone number'],
//         validate: [isMobilePhone, 'Please enter a valid phone number']
//     },
//     email: {
//         type: String,
//         required: [true, 'Please enter your email'],
//         unique: true,
//         lowercase: true,
//         validate: [isEmail, 'Please enter a valid email']
//     },
//     password: {
//         type: String,
//         required: [true, 'Please enter the password'],
//         minlength: [6, 'Minimum password length is 6 characters']
//     }
// })


// // fire a function after a doc saved to db
// // userSchema.post('save', function(doc, next) {
// //     console.log('New user was Created and saved', doc)
// //     next()
// // })

// // fire a function before a doc saved to db
// userSchema.pre('save', async function(next) {
//     const salt = await bcrypt.genSalt()
//     this.password = await bcrypt.hash(this.password, salt)
//     next()
// })


// // static method to login user
// userSchema.statics.login = async function (email, password) {
//     const user = await this.findOne({ email })
//     if(user) {
//         const auth = await bcrypt.compare(password, user.password)
//         if(auth){
//             return user
//         }
//         throw Error('incorrect password')
//     }
//     throw Error('incorrect email')
// }


// const User = mongoose.model('user', userSchema)

// module.exports = User