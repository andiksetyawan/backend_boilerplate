const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const path = require('path');
const app = express();
require('dotenv').config();

app.use('/assets', express.static(path.join(__dirname, 'public')));//static file


app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json({ strict: false }));

/*Route*/
const userRoutes = require('./routes/user');
//const authRoutes = require('./routes/auth');

app.use('/user', userRoutes);
//app.use('/auth', authRoutes);

app.use('/', (req, res, next) => {
    res.json({ success: true, message: "Welcome index", data: {} });
});




app.use((req, res, next) => {
    const success = false;
    const status = 404;
    const message = "Not Found";
    const data = {};
    res.status(status).json({ success: success, message: message, data: data });
});

app.use((error, req, res, next) => {
    console.log(error);
    const status = error.statusCode || 500;
    const message = error.message;
    const data = error.data;
    res.status(status).json({ succes: false, message: message, body: data });
});

const port = process.env.SVR_PORT;
app.listen(port, '0.0.0.0', () => console.log('Example app listening on port !!!' + port));

// mongoose
//   .connect(`mongodb://${process.env.DB_HOST}:${process.env.DB_PORT}/pulsaone`,
//     {
//       auth: {"authSource": "admin"},
//       user: `${process.env.DB_USER}`,
//       pass: `${process.env.DB_PASS}`,
//       useCreateIndex: true,
//       useNewUrlParser: true
//     }
//   )
//   .then(result => {
//     app.listen(port, '0.0.0.0', () => console.log('Example app listening on port !!!' + port))
//   })
//   .catch(err => console.log(err));
