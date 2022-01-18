const router = require('express').Router();
const User = require('../models/User');
const { verifyTokenAuthorization, verifyTokenAdmin } = require('../middleware/verifyToken');
const crypto = require('crypto-js');


router.put('/:id', verifyTokenAuthorization, async (req, res) => {
    if (req.body.password) {
        req.body.password = crypto.AES.encrypt(req.body.password, process.env.KEY).toString();
    }

    try {
        const userUpdate = await User.findByIdAndUpdate(req.params.id, {
            $set: req.body,
        }, { new: true });
        res.status(200).json(userUpdate);
    } catch (error) {
        res.status(500).json(error);
    }
});

// delete user by id
router.delete('/:id', verifyTokenAuthorization, async (req, res) => {
    try {
        const user = await User.findByIdAndDelete(req.params.id);
        res.status(200).json('User has been deleted...');
    } catch (error) {
        res.status(500).json(error);
    }
});

// get user by id
router.get('/find/:id', verifyTokenAdmin, async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        delete user._doc.password;
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json(error);
    }
});

// get all user
router.get('/', verifyTokenAdmin, async (req, res) => {
    const query = req.query.new;
    try {
        const users = query ? await User.find().sort({ _id: -1 }).limit(5) : await User.find();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json(error);
    }
});

// get user stats
router.get('/stats', verifyTokenAdmin, async (req, res) => {
    const date = new Date();
    const lastYear = new Date(new Date().setFullYear(date.getFullYear() - 1));

    try {
        const data = await User.aggregate([
            { $match: { createdAt: { $gte: lastYear } } },
            {
                $project: {
                    $month: '$createdAt'
                }
            },
            {
                $group: {
                    _id: "$month",
                    total: { $sum: 1 },
                }
            }
        ]);
        res.status(200).json(date);
    } catch (error) {
        res.status(500).json(error);
    }

});

module.exports = router;