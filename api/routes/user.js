var express = require('express');
var router = express.Router();
const validationError = require('../middleware/validationError');
const { wrapper } = require('../utils/errorWrapper');
const { addUser , getUser,MYloginUser} = require('../controller/user/user');
const { userCreateValidator,userLoginValidator } = require('../validator/user');



router.post('/', userCreateValidator, validationError, wrapper(addUser));

router.post('/login', userLoginValidator, validationError, wrapper(MYloginUser));

router.get('/getuser', wrapper(getUser));



module.exports = router;
