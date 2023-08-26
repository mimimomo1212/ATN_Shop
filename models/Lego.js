var mongoose = require ('mongoose');
var LegoSchema = mongoose.Schema({
   name: String,
   detail: String,
   type: String,
   image: String,
   price: Number,
});
const ToysModel = mongoose.model('lego', LegoSchema, 'lego');
module.exports = ToysModel;