const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const destinationSchema = new Schema({
    airport: {
        type: String,
        enum: ['AUS', 'DAL', 'LAX', 'SEA'],
    },
    arrival: Date,
});

const flightSchema = new Schema({
    airline: {
        type: String,
        enum: ['American', 'Southwest', 'United'],
    },
    flightNo: {
        type: Number,
        required: true,
        min: 10,
        max: 9999
    },
    departs: {
        type: Date,
        default: function() {
            let flightDt = new Date();
            let nextYr = flightDt.getFullYear() + 1;
            flightDt.setFullYear(nextYr);
            return flightDt;
        },
    },
    airport: {
        type: String,
        enum: ['AUS', 'DAL', 'LAX', 'SEA'],
        default: 'SEA',
    },
    destinations: [destinationSchema],
}, {
    timestamps: true,
});

module.exports = mongoose.model(
    'Flight', flightSchema
);