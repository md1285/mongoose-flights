const Flight = require('../models/flight');
const Ticket = require('../models/ticket');

module.exports = {
    new: newTicket,
    create,
    delete: deleteTicket,
};

function newTicket(req, res) {
    Flight.findById(req.params.id, function(err, flight){
        res.render('tickets/new', {flight});
    });
}
function deleteTicket(req, res) {
    Ticket.deleteOne({_id: req.params.id}, function(err){
        if (err){ 
            console.log(err);
            res.redirect(`back`);
        }
        res.redirect(`back`);
    })
}

function create(req, res) {
    req.body.flight = req.params.id;
    Ticket.create(req.body, function(err, ticket){
        if (err){
            console.log(err)
            res.redirect(`/flights/${req.params.id}/tickets/new`);
        } else {
            res.redirect(`/flights/${req.params.id}`);
        }
    });
}
