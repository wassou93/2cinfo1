var express = require('express');
var router = express.Router();

var User = require('../model/user');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/add', async function(req, res, next) {
  try {
    const user = new User(req.body);
    await user.save();
    res.status(200).send('User saved successfully');
  } catch (e) {
    console.error(e);
    res.status(500).send('An error occurred');
  }
});


module.exports = router;
