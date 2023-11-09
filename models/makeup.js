const mongoose = require("mongoose")
const makeupSchema = mongoose.Schema({
    brand :String,
    id : Number,
    price : Number
})
module.exports = mongoose.model("Makeup", makeupSchema)