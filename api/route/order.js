const router = require('express').Router();
const Order = require('../models/Order');
const { verifyTokenAuthorization, verifyTokenAdmin, verifyToken } = require('../middleware/verifyToken');

// add order
router.post('/', verifyTokenAuthorization, async (req, res) => {
    const order = await Order(req.body);
    try {
        save = await order.save();
        res.status(200).json(save);
    } catch (error) {
        res.status(500).json(error);
    }
});

// update order
router.put('/:id', verifyTokenAdmin, async (req, res) => {
    try {
        const orderUpdate = await Order.findByIdAndUpdate(req.params.id, {
            $set: req.body,
        }, { new: true });
        res.status(200).json(orderUpdate);
    } catch (error) {
        res.status(500).json(error);
    }
});

// delete order by id
router.delete('/:id', verifyTokenAdmin, async (req, res) => {
    try {
        const order = await Order.findByIdAndDelete(req.params.id);
        res.status(200).json('order has been deleted...');
    } catch (error) {
        res.status(500).json(error);
    }
});

// get order by user id
router.get('/find/:userId', verifyTokenAuthorization, async (req, res) => {
    try {
        const order = await Order.findOne({ userId: req.params.userId });
        res.status(200).json(order);
    } catch (error) {
        res.status(500).json(error);
    }
});

// get all order
router.get('/', verifyTokenAdmin, async (req, res) => {
    try {
        const order = await Order.find();
        res.status(200).json(order);
    } catch (error) {
        res.status(500).json(error);
    }
});

// get mothely income

router.get('/income', verifyTokenAdmin, async (req, res) => {
    const date = new Date();
    const lastMonth = new Date(date.setMonth(date.getMonth() - 1));
    const previousMounth = new Date(new Date().setMonth(lastMonth.getMonth() - 1));


    try {
        const income = await Order.aggregate([
            { $match: { createdAt: { $gte: previousMounth } } },
            {
                $project: {
                    month: { $month: "$createdAt" },
                    sales: "$amount",
                },
            },
            {
                $group: {
                    _id: "$month",
                    total: { $sum: "$sales" },
                }
            },
        ]);
        res.status(500).json(income);
    } catch (error) {
        res.status(500).json(error);
    }

});


module.exports = router;