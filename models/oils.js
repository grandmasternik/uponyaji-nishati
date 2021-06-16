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

// const Products = mongoose.model(`Products`, ProductsSchema)

module.exports = mongoose.model(`Oil`, oilSchema);
