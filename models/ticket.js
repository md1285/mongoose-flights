const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ticketSchema = new Schema({
    price: {
        type: Number,
        min: 0,
    },
    seat: {
        type: String,
        match: /[A-F][1-9]\d?/
    },
    flight: {
        type: Schema.Types.ObjectId,
        ref: 'Flight'
    }
}, {
    timestamps: true,
});

module.exports = mongoose.model(
    'Ticket', ticketSchema
);