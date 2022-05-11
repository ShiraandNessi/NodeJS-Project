const { ObjectId } = require('mongodb');
var mongoose = require('mongoose');
const productModel = require('./productModel');
var Schema   = mongoose.Schema;

var orderSchema = new Schema({
	'user' : {
	 	type: Schema.Types.ObjectId,
	 	ref: 'user'
	},
	'items' : [{
		'product':{
			type: Schema.Types.ObjectId,
			ref: 'product'
	   },
	   'quantity':Number
	}],
	'sum' : Number,
	'date' : Date
},{timestamps:true});

module.exports = mongoose.model('order', orderSchema);
