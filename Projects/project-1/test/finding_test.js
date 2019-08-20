const assert = require('assert');
const MarioChar = require('../models/mariochar');

// Describe tests
describe('Finding records', () => {

    beforeEach((done) => {
        var char = new MarioChar({
            name: 'Mary'
        });

        char.save().then(() => {
            assert(char.isNew === false);
            done();
        });
    });

    // Create tests
    it('Finds one record from the database', (done) => {
        MarioChar.findOne({
            name: 'Mary'
        }).then((result) => {
            assert(result.name === 'Mary');
            done();
        });
    });

});