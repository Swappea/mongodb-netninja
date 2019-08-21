const assert = require('assert');
const MarioChar = require('../models/mariochar');

// Describe tests
describe('Finding records', () => {

    var char;

    beforeEach((done) => {
        char = new MarioChar({
            name: 'Mary'
        });

        char.save().then(() => {
            assert(char.isNew === false);
            done();
        });
    });

    // Finding record 
    it('Finds one record from the database', (done) => {
        MarioChar.findOne({
            name: 'Mary'
        }).then((result) => {
            assert(result.name === 'Mary');
            done();
        });
    });

    // Finding record by id
    it('Finds one record by id from the database', (done) => {
        MarioChar.findOne({ _id: char._id}).then((result) => {
            assert(result.id.toString() === char._id.toString());
            done();
        });
    });

});