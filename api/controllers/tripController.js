'use strict';

/*---------------TRIPS----------------------*/
var mongoose = require('mongoose'),
  Item = mongoose.model('Trip');

exports.search_trips = function(req, res) {
  //Check if trip param exists (trip: req.query.trip)
  //Check if keyword param exists (keyword: req.query.keyword)
  //Search depending on params but only if deleted = false
  console.log('Searching an trip depending on params');
  res.send('Trips returned from the item search');
};
