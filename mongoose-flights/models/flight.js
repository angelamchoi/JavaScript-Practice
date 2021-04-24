const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const flightSchema = new Schema({
 airline: {
     type: String,
     eum: ['American', 'Southwest' & 'United']
 },
 airport: {
     type: String,
     enum:['AUS', 'DFW', 'DEN', 'LAX' & 'SAN'],
     default: 'DEN'
 },
flightNo: {
    type: Number,
    min: 10,
    max: 9999
},
 departs: {
     type: Date
}
});

module.exports = mongoose.model('Flight', flightSchema);