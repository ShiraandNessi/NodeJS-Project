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
    res.send(await ProductModel.find({}))
  },

  /**
   * productController.show()
   */
  show: async function (req, res) {
    const categoryIds = Object.values(req.query);
    let products = []
   for(const id of categoryIds){
      const pr = await ProductModel.find({ category: id })
      pr.forEach(p => products.push(p))

    };

    res.send(products);
  },

  /**
   * productController.create()
   */
  create: async function (req, res) {
    const product = new ProductModel({
      name: req.body.name,
      price: req.body.price,
      desc: req.body.desc,
      category: req.body.category
    });

    await product.save();
    res.send(product)
  },


};
