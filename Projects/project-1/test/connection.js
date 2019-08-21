const mongoose = require('mongoose');

// Connect to db before tests run
before((done) => {
    // Connect to mongodb
    mongoose.connect('mongodb://localhost/testdb', { useNewUrlParser: true, useFindAndModify: false });

    mongoose.connection.once('open', () => {
        console.log('Connection has been made... !!!');
        done();
    }).on('error', (error) => {
        console.log(`Connection error:${error}`);
    });
});

// Drop the characters collection before each test
beforeEach((done) => {
    // Drop the collection
    mongoose.connection.collections.mariochars.drop(() => {
        done();
    });
});