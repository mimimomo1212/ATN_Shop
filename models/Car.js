var mongoose = require ('mongoose');
var CarSchema = mongoose.Schema({
   name: String,
   detail: String,
   type: String,
   image: String,
   price: Number,
});
const ToysModel = mongoose.model('car', CarSchema, 'car');
module.exports = ToysModel;