const assert = require('assert');
const MarioChar = require('../models/mariochar');

// Describe tests
describe('Updating records', () => {

    var char;

    beforeEach((done) => {
        char = new MarioChar({
            name: 'Mary',
            weight: 56
        });

        char.save().then(() => {
            assert(char.isNew === false);
            done();
        });
    });

    // Finding record 
    it('Updates one record from the database', (done) => {
        MarioChar.findOneAndUpdate({ name: 'Mary' }, { name: 'Swappea' }).then(() => {
            MarioChar.findOne({ _id: char._id }).then((result) => {
                assert(result.name === 'Swappea');
                done();
            });
        });
    });

    // Finding record 
    it('Increments the weight by 1', (done) => {
        MarioChar.updateMany({}, { $inc: { weight: 2 } }).then(() => {
            MarioChar.findOne({ name: 'Mary' }).then((record) => {
                assert(record.weight === 58);
                done();
            });
        });
    });

});