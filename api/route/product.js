const router = require('express').Router();
const Product = require('../models/Product');
const { verifyTokenAuthorization, verifyTokenAdmin } = require('../middleware/verifyToken');

// add product
router.post('/', verifyTokenAdmin, async (req, res) => {
    const product = await Product(req.body);
    try {
        save = await product.save();
        res.status(200).json(save);
    } catch (error) {
        res.status(500).json(error);
    }
});


router.put('/:id', verifyTokenAdmin, async (req, res) => {
    try {
        const productUpdate = await Product.findByIdAndUpdate(req.params.id, {
            $set: req.body,
        }, { new: true });
        res.status(200).json(productUpdate);
    } catch (error) {
        res.status(500).json(error);
    }
});

// delete product by id
router.delete('/:id', verifyTokenAdmin, async (req, res) => {
    try {
        const product = await Product.findByIdAndDelete(req.params.id);
        res.status(200).json('Product has been deleted...');
    } catch (error) {
        res.status(500).json(error);
    }
});

// get product by id
router.get('/find/:id', async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json(error);
    }
});

// get all product
router.get('/', async (req, res) => {
    const qNew = req.query.new;
    const qCategory = req.query.category;
    try {
        let products;
        if (qCategory) {
            products = await Product.find({ categories: { $in: [qCategory] } }).sort({ _id: -1 });
        } else if (qNew) {
            products = await Product.find().sort({ _id: -1 }).limit(5);
        } else {
            products = await Product.find();
        }
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json(error);
    }
});

// // get user stats
// router.get('/stats', verifyTokenAdmin, async (req, res) => {
//     const date = new Date();
//     const lastYear = new Date(date.setFullYear(date.getFullYear() - 1));

//     try {
//         const data = await User.aggregate([
//             { $match: { createdAt: { $gte: lastYear } } },
//             {
//                 $project: {
//                     $month: '$createdAt'
//                 }
//             },
//             {
//                 $group: {
//                     _id: "$month",
//                     total: { $sum: 1 },
//                 }
//             }
//         ]);
//         res.status(200).json(date);
//     } catch (error) {
//         res.status(500).json(error);
//     }

// });

module.exports = router;