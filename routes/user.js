const express = require('express');
const userController = require('../controllers/user');

//const isAuthMiddleware = require('../middlewares/isauth');


const router = express.Router();

router.get('/', userController.read); 
router.get('/phone/:handphone', userController.readByPhone);
//router.post('/create', isAuthMiddleware, userController.create);

module.exports = router;