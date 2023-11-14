var express = require("express");
var router = express.Router();
var os = require("os");

/* GET home page. */
router.get("/", function (req, res, next) {
  //res.render('index', { title: 'Os' });
  res.json({
    hostname: os.hostname(),
    type: os.type(),
    platform: os.platform(),
  });
});

router.get("/cpus", function (req, res, next) {
  //res.render('index', { title: 'Os' });
  res.json({
    CPUs: os.cpus(),
  });
});

router.get("/cpus/:id", function (req, res, next) {
  //res.render('index', { title: 'Os' });
  const { id } = req.params;
  //console.log('id: ' + id);
  const cpu = os.cpus()[id];

  res.json(cpu);
});

module.exports = router;
