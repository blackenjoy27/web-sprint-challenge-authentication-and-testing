const jwt = require("jsonwebtoken");

const {JWT_SECRECT} = require("../config/secrect");

module.exports = function (user) {
    const payload = {
        subject: user.id,
        username:user.username,
    }
    const options = {
        expiresIn:"1d"
    }
    return jwt.sign(
        payload,
        JWT_SECRECT,
        options
        
    )
}