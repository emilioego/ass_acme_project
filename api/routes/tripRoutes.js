'use strict';
module.exports = function(app) {
  var order = require('../controllers/tripController');
  
  
  /**
   * Search engine for trips
   * Get trips depending on params
   *    RequiredRoles: Explorer
   *
   * @section trip
   * @type get
   * @url /v1/trip/search
   * @param {string} keyword
   * @param {string} price_range
   * @param {string} date_range 
  */
  app.route('/v1/trips/search')
    .get(trip.search_trip);

};
