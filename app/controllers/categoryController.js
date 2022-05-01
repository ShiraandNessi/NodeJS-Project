var CategoryModel = require('../models/categoryModel.js');

/**
 * categoryController.js
 *
 * @description :: Server-side logic for managing categorys.
 */
module.exports = {

    /**
     * categoryController.list()
     */
    list: async function (req, res) {
       const categories=await CategoryModel.find({});
       res.send(categories)
    },
      /**
     * categoryController.create()
     */
       create: async function (req, res) {
        const category = new CategoryModel({
             name : req.body.name,
         });
 
       await  category.save();
         res.send(category)
     },

   
};
