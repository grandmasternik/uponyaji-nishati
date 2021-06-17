const mongoose = require(`mongoose`);
const Schema = mongoose.Schema;

const claySchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    benefits: {
        type: String,
        required: true,
    },
    img: String,
});

const Clay = mongoose.model(`Clay`, claySchema);

module.exports = mongoose.model(`Clay`, claySchema);