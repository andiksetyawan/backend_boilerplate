const jwt = require('jsonwebtoken'); //npm i jwt --save
require('dotenv').config();

module.exports = (req, res, next) => {
    var token = req.headers['authorization'];
    if (token) {
        jwt.verify(token, process.env.JWT_KEY, function (err, decoded) {
            if (err) {
                res.status(403).json({
                    succes: false,
                    message: 'Token invalid ' + err,
                    body: {},
                });
            } else {
                req.decoded = decoded;
                req.token = token;
                next();
            }
        });
    } else {
        res.status(403).json({
            succes: false,
            message: 'Token not found',
            body: {},
        });
    }

}