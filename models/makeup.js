const mongoose = require("mongoose")
const makeupSchema = mongoose.Schema({
    brand: {
        type: String,
        required: true,
        minlength: 4,
        maxlength: 25,
        // Custom validator using RegExp
        validate: {
            validator: function (v) {
                return /^[a-zA-Z0-9_]+$/.test(v); 
            },
            message: props => `${props.value} is not a valid brandname! Use only letters, numbers, and underscores.`,
        },
    },
    id: {
        type: Number,
        validate: {
            validator: function(v) {
                return v >= 0; // Ensure id is non-negative
            },
            message: props => `${props.value} is not a valid id! Id must be a non-negative number.`,
        },
    },
    price: {
        type: Number,
        validate: {
            validator: function(v) {
                return v >= 0; // Ensure price is non-negative
            },
            message: props => `${props.value} is not a valid price! Price must be a non-negative number.`,
        },
    },
})
module.exports = mongoose.model("makeup", makeupSchema)