//const User = require('../models/user');


exports.read = (req, res, next) => {
    let user = {
        _id: '5c04046a3819032dfc70a2de',
        name: 'Harry Maguire',
        hanphone: '6281821929192',
        email: 'harry@gmail.com',
        hoby: 'football'
    }
    res.json({ succes: true, message: 'Fetch success', body: user });
}

exports.readByPhone = (req, res, next) => {
    if (req.params.handphone == '6281821929192') {
        let user = {
            _id: '5c04046a3819032dfc70a2de',
            name: 'Harry Maguire',
            hanphone: '6281821929192',
            email: 'harry@gmail.com',
            hoby: 'football'
        }
        res.json({ succes: true, message: 'Fetch success', body: user });
    } else {
        res.json({ succes: false, message: 'User Not Found', body: {} });
    }

}

exports.create = (req, res, next) => { }

// exports.reads = (req, res, next) => {
//     User.find({}, function (err, res) {
//         if (!err) {
//             res.json({ succes: true, message: 'Fetch success', body: res });
//         } else {
//             res.json({ succes: false, message: 'Fetch failed', body: res });
//         }
//     });
// }
