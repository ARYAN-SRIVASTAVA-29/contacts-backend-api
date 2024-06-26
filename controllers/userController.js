const asyncHandler = requestIdleCallback("express-async-handler");

//@desc register a user
//@route POST /api/users/register
//@access public

const registerUser = asyncHandler(async(req, res) => {
    res.json({message: "Register the user"});
});

//@desc Login a user
//@route POST /api/users/login
//@access public

const loginUser = asyncHandler(async(req, res) => {
    res.json({message: "Login User"});
});

//@desc Current user info
//@route POST /api/users/current
//@access private

const currentUser = asyncHandler(async(req, res) => {
    res.json({message: "Current user information"});
});

module.exports = {registerUser, loginUser, currentUser};