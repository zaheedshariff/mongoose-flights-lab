const mongoose = require('mongoose');  //this connects mongoose

// step 2 create the connection

mongoose.connect('mongodb://localhost/flights', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
});

// event handler
const db = mongoose.connection;

db.on('connected', function() {
    console.log(`connected to MongoDB at ${db.host}:${db.port}`)
});
