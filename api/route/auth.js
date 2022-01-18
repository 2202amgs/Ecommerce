const router = require('express').Router();
const User = require('../models/User');
const crypto = require('crypto-js');
const jwt = require('jsonwebtoken');

//register
router.post('/register', async (req, res) => {
    const newUser = await User({
        username: req.body.username,
        email: req.body.email,
        password: crypto.AES.encrypt(req.body.password, process.env.KEY).toString(),
    });
    try {
        const saved = await newUser.save();
        res.status(201).json(saved);
    } catch (error) {
        res.status(500).json(error);
    }

});

//login
router.post('/login', async (req, res) => {
    try {
        // get user from database
        const user = await User.findOne({ username: req.body.username });
        if (!user) {
            return res.status(401).json("Wrong Credentials!!");
        }

        // decrypt password
        const hashPassword = crypto.AES.decrypt(user.password, process.env.KEY);
        const decryptedpassword = hashPassword.toString(crypto.enc.Utf8);


        if (decryptedpassword !== req.body.password) {
            res.status(401).json("Wrong Credentials!");
        } else {
            // const { password, ...userdata } = user._doc;
            delete user._doc.password; // delet password from user object
            const accessToken = jwt.sign( // generate token
                { id: user._id, isAdmin: user.isAdmin },
                process.env.KEY,
                { expiresIn: "3d" }
            );
            res.status(200).json({ ...user._doc, accessToken }); // login success
        }

    } catch (error) {
        res.status(500).json(error)
    }
});

module.exports = router;