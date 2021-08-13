const mongoose = require('mongoose');
const {
  isEmail,
} = require('validator');
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    minLength: 6,
    maxLength: 50,
  },
  dateCreated: {
    type: Date,
    default: new Date(),
  },
  age: {
    type: Number,
    min: 4,
    max: 65,
  },
  isCool: {
    type: Boolean,
    default: false,
  },
  email: {
    type: String,
    // Makes it required
    required: [true, 'Email is required'],
    // Makes it unique
    unique: true,
    validate: {
      validator: function(value) {
        return isEmail(value);
      },
      message: 'Please enter a valid email address',
    },
  },
  role: {
    // Admin, Manager, Employee   => Cool Dude
    type: String,
    required: true,
    // This is case sensitive so 'admin' is not allowed
    enum: ['Admin', 'Manager', 'Employee'],
    default: 'Employee',
  },
  hobbies: [
    {
      type: String,
    }
  ],
  pc: {
    gpu: { type: String, required: true },
    ram: Number,
    cpu: String,
  },
});
module.exports = mongoose.model('User', userSchema);