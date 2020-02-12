'use strict';
/*---------------TRIP----------------------*/

/*---------------GET----------------------*/
var mongoose = require('mongoose'),
 Trip = mongoose.model('Trips');

exports.list_all_trips = function(req, res) {
    console.log(Date(), ` -GET /trips`)
    Trip.find({}, function(err, trips){
        if(err){
            console.error(Date(), ` ERROR: - GET /trips , Some error ocurred while retrieving trips: ${err.message}`);
            res.send(err);
        }else{
            console.log(Date(), ` SUCCESS: -GET /trips`);
            res.json(trips);
        }
    });
};

exports.read_a_trip = function (req, res) {
    console.log(Date(), ` -GET /trips/${req.params.tripId}`)
    Trip.findById(req.params.tripId, function(err, trip){
        if(err){
            console.error(Date(), ` ERROR: - GET /trips/${req.params.tripId} , Some error ocurred while retrieving a trip : ${err.message}`);
            res.send(err);
        }else{
            console.log(Date(), ` SUCCESS: -GET /trips/${req.params.tripId}`);
            res.json(trip);
        }
    });
};

/*---------------POST----------------------*/

exports.create_a_trip = function (req, res) {
    console.log(Date(), ` -POST /trips`);
    var new_trip = new Trip(req.body);
    new_trip.save(function(err, trip) {
        if(err){
            console.error(Date(), ` ERROR: - POST /trips , Some error ocurred while saving a trip: ${err.message}`);
            res.send(err);
        }else{
            console.log(Date(), ` SUCCESS: -POST /trips`);
            res.json(trips);
        }
    });
};

/*---------------PUT----------------------*/

exports.update_a_trip = function(req, res) {
    console.log(Date(), ` -PUT /trips/${req.params.tripId}`)
    Trip.findOneAndUpdate({_id: req.params.tripId}, req.body, {new: true}, function(err, trip) {
        if(err){
            console.error(Date(), ` ERROR: - PUT /trips/${req.params.tripId} , Some error ocurred while updating a trip : ${err.message}`);
            res.send(err);
        }else{
            console.log(Date(), ` SUCCESS: -PUT /trips/${req.params.tripId}`);
            res.json(trip);
        }
    });
};

/*---------------DELETE----------------------*/

exports.delete_a_trip = function(req, res) {
    console.log(Date(), ` -DELETE /trips/${req.params.tripId}`)
    Trip.deleteOne({_id: req.params.tripId}, function(err, trip) {
        if(err){
            console.error(Date(), ` DELETE: - DELETE /trips/${req.params.tripId} , Some error ocurred while deleting a trip : ${err.message}`);
            res.send(err);
        }else{
            console.log(Date(), ` SUCCESS: -DELETE /trips/${req.params.tripId}`);
            res.json({ message: 'Trip successfully deleted' });
        }
    });
}