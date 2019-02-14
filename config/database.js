const mongoose = require('mongoose');

mongoose.connect(
    'mongodb://localhost/flights', 
    {useNewUrlParser: true}
);

// shortcut to mongoose.connection object
const db = mongoose.connection;

db.on('connected', function(){
    console.log(`Connected to MongoDB at ${db.host}:${db.port}`);
});