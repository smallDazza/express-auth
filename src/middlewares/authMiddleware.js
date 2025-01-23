const jwt = require("jsonwebtoken");
require("dotenv").config();

async function validateToken (request, response, next) {

    const token = request.headers.jwt;
    // to get the token from the 'Auth' tab: 
    //req.headers.authorization.split(' ')[1];
    // [0] returns Bearer, [1] returns the token.

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    request.authUserData = decoded;
    next();
}

module.exports = {
    validateToken
};
