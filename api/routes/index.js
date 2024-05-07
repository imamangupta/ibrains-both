var express = require('express');
var router = express.Router();

const user = require('./user')
router.use('/user', user);


const post = require('./post')
router.use('/post', post);




module.exports = router;