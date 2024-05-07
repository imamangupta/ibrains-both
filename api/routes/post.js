var express = require('express');
var router = express.Router();
const { getPost,addPost,getaginPost  } = require('../controller/post/post');
const { wrapper } = require('../utils/errorWrapper');


router.get('/getpost' ,wrapper(getPost));
router.get('/getmorepost' ,wrapper(getaginPost));
router.post('/addpost' ,wrapper(addPost));



module.exports = router;