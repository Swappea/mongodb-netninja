const assert = require('assert');
const MarioChar = require('../models/mariochar');

// Describe tests
describe('Deleting records', () => {

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
    it('Deletes one record from the database', (done) => {
        MarioChar.findOneAndRemove({ name: 'Mario' }).then(() => {
            MarioChar.findOne({ name: 'Mario' }).then((result) => {
                assert(result === null);
                done();
            });
        });
    });



});