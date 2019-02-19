const Flight = require('../models/flight');
const Ticket = require('../models/ticket');

module.exports = {
    index,
    new: newFlight,
    create,
    show
};

function index(req, res){
    Flight.find({}, function(err, flights){
        res.render('flights/index', {flights},
        );
    });
}

function show(req, res){
    Flight.findById(req.params.id, function(err, flight) {
        Ticket.find({flight: flight._id}, function(err, tickets){
            res.render('flights/show', {flight, tickets});
        });
    });
}

function newFlight(req, res){
    res.render('flights/new');
}

function create(req, res){
    req.body.flightNo = parseInt(req.body.flightNo);
    if (!req.body.departs) delete req.body.departs;
    let flight = new Flight(req.body);
    flight.save(function(err){
        if (err) return res.render('flights/new');
        console.log(flight);
        res.redirect('/flights/');
    });
}