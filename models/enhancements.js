const mongoose = require(`mongoose`);
const Schema = mongoose.Schema;

const enhancementSchema = new Schema({
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

// const Products = mongoose.model(`Products`, ProductsSchema)


module.exports = mongoose.model(`Enhancement`, enhancementSchema);