var express = require('express');
var models = require('../server/models/index');
var router = express.Router();

var db = require('../queries');

/* GET home page. */
//router.get('/', function(req, res, next) {
  //res.render('index', { title: 'Express' });
//});

router.post('/users', function(req, res) {
  models.User.create({
    email: req.body.email
  }).then(function(user) {
    res.json(user);
  });
});

router.get('/api/puppies', db.getAllPuppies);
router.get('/api/puppies/:id', db.getSinglePuppy);
router.post('/api/puppies', db.createPuppy);
router.put('/api/puppies/:id', db.updatePuppy);
router.delete('/api/puppies/:id', db.removePuppy);

router.get('/api/kittens', db.getAllKittens);

// Blog routes

router.get('/api/posts', db.getAllPosts);
router.get('/api/posts/:id', db.getSinglePost);
router.post('/api/posts', db.createPost);
router.put('/api/posts/:id', db.updatePost);
router.delete('/api/posts/:id', db.removePost);

module.exports = router;
