const mongoose = require(`mongoose`);
const Schema = mongoose.Schema;

const oilSchema = new Schema({
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

// const Products = mongoose.model(`Products`, ProductsSchemaO
const Oil = mongoose.model(`Oil`, oilSchema);


module.exports = mongoose.model(`Oil`, oilSchema);
