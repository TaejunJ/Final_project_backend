// modules required for routing
let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');


router.get('/', (req, res, next) => {
  res.render('home', {
    title: 'Home'
   });
});

module.exports = router;