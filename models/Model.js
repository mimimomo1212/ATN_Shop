var mongoose = require ('mongoose');
var ModelSchema = mongoose.Schema({
   name: String,
   detail: String,
   type: String,
   image: String,
   price: Number,
});
const ToysModel = mongoose.model('model', ModelSchema, 'model');
module.exports = ToysModel;