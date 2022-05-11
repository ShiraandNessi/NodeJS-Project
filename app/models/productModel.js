var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var productSchema = new Schema({
	'name' : String,
	'price' : Number,
	'desc' : String,
	'category' : {
	 	type: Schema.Types.ObjectId,
	 	ref: 'category'
	},
	'imagename':String
});

module.exports = mongoose.model('product', productSchema);
