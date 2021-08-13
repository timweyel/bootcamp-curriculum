const { Schema, model } = require('mongoose');

const accountSchema = new Schema({
  name: String,
});

const userSchema = new Schema({
  accountId: {
    type: Schema.Types.ObjectId,
    ref: 'Account',
    index: true,
  },
  name: String,
  pets: [{ type: Schema.Types.ObjectId, ref: 'Pet' }],
});

const petSchema = new Schema({
  name: String,
  ownerIds: [{ type: Schema.Types.ObjectId, ref: 'User' }],
});

const Pet = model('Pet', petSchema);
const User = model('User', userSchema);