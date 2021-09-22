const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    //_id gets added automatically by mongoDB

    title: {
        type: String,
        required: [true, "Title is required!"],
        // minlength: [10, "Title must be at least 10 characters"]
    },

    price: {
        type: Number,
        required: [true, "Price is required!"],
        min: [0, "Price cannot be less than free.99!"]
    },

    description: {
        type: String
    }

});

const Product = mongoose.model('Product', ProductSchema);

module.exports = Product; 