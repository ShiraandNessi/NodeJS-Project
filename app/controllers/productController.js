var ProductModel = require('../models/productModel.js');

/**
 * productController.js
 *
 * @description :: Server-side logic for managing products.
 */
module.exports = {

    /**
     * productController.list()
     */
    list: async function (req, res) {
    res.send(  await  ProductModel.find({}))
    },

    /**
     * productController.show()
     */
    show:async function (req, res) {
       const categoryId = req.params.id;

     res.send( await  ProductModel.findOne({category: categoryId}));
    },

    /**
     * productController.create()
     */
    create: async function (req, res) {
      const product = new ProductModel({
			name : req.body.name,
			price : req.body.price,
			desc : req.body.desc,
			category : req.body.category
        });

      await  product.save();
        res.send(product)
    },

    
};
