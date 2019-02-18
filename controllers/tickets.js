const Flight = require('../models/flight');

module.exports = {
    new: newTicket,
    create
};

function newTicket(req, res) {
    Flight.findById(req.params.id, function(err, flight){
        res.render('tickets/new', {flight});
    });
}
function create(req, res) {
    req.body.flight = req.params.id;
    console.log(req.body);
    res.redirect('/flights');
}
