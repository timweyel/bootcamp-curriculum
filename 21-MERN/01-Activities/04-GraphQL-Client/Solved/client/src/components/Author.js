const { Schema, model } = require('mongoose');
const authorSchema = new Schema({
  firstName: String,
  lastName: String,
});
module.exports = model('Author', authorSchema);