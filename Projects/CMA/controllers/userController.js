const asyncHandler = require('express-async-handler');
const User = require('../models/userModel');
const bcrypt = require ('bcryptjs');
const jwt = require('jsonwebtoken');
// @desc Register a User
// @route POST /api/users/register
// @access private
const registerUser = asyncHandler(async function(req, res, next){
    const { username, email, password } = req.body;
    if (!username || !email || !password){
        res.stats(400);
        throw new Error("All fields are mandatory");
    }
    const userAvailabel = await User.findOne({ email });
    if (userAvailabel){
        res.stats(400);
        throw new Error("User already registered!");
    }
    // hash pass
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({
        username,
        email,
        password: hashedPassword,
    });
    
    console.log(`User Created ${user}`);
    if (user){
        res.status(201).json({ _id: user.id, email: user.email });
    } else {
        res.status(400);
        throw new Error('User data is not valid!');
    }
});


// @desc Login User
// @route POST /api/users/login
// @access private
const loginUser = asyncHandler(async function(req, res, next){
    const {email, password} = req.body;
    if (!email || !password){
        res.status(400);
        throw new Error('All fields are mandatory')
    }
    const user = await User.findOne({ email });
    // compare password with hashedPassword
    if (user && (await bcrypt.compare(password, user.password))){
        const accessToken = jwt.sign({
            user: {
                username: user.username, 
                email: user.email, 
                id: user.id
            },
        }, proccess.env.ACCESS_TOKEN_SECRET,
        {expiresIn: '20m'}
    );
        res.status(200).json({ accessToken }); 
    }else{
        res.status(401);
        throw new Error('email or password is not valid!')
    }
});


// @desc Current User Info
// @route GET /api/users/current
// @access private (only logged in user can see)
const currentUser = asyncHandler(async function(req, res, next){
    res.json(req.user);
});
module.exports = {registerUser, loginUser, currentUser};
