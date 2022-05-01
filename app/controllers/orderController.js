var OrderModel = require('../models/orderModel.js');

/**
 * orderController.js
 *
 * @description :: Server-side logic for managing orders.
 */
module.exports = {

    /**
     * orderController.show()
     */
    show: async function (req, res) {
        var id = req.params.id;

       res.send( await OrderModel.findOne({_id: id}));
    },

    /**
     * orderController.create()
     */
    create: async function (req, res) {
       const order = new OrderModel({
			user : req.body.user,
			items : req.body.items,
			sum : req.body.sum,
			date : req.body.date
        });

      await  order.save();
        res.send(order)
    },

    /**
     * orderController.update()
     */
    update: async function (req, res) {
        const id = req.params.id;

        const order=OrderModel.findOne({_id: id})

            order.user = req.body.user ? req.body.user : order.user;
			order.items = req.body.items ? req.body.items : order.items;
			order.sum = req.body.sum ? req.body.sum : order.sum;
			order.date = req.body.date ? req.body.date : order.date;
			
           await order.save();
        res.send(order)
    },

    /**
     * orderController.remove()
     */
    remove: async function (req, res) {
        const orderId = req.params.orderId;
        const productId = req.params.productId;
       const order= await OrderModel.findOne({_id:orderId});
           order.items.findOne({product:productId})

         res.send(order)
      
    }
};
