const Schema = mongoose.Schema;

const claySchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
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

module.exports = mongoose.model(`Clay`, claySchema);