var express = require('express');
var router = express.Router();
let Article = require('../models/Article');
/* GET article listing. */
router.get('/new', function (req, res, next) {
  res.render('articleform', {});
});

router.post('/', (req, res) => {
  let article = req.body;
  Article.create(article, (err, artlist) => {
    res.render('articlelist', { list: artlist });
  });
});
module.exports = router;
