const mongoose = require("mongoose");
const schema = mongoose.schema;

const userSchema = new Schema({
    firstName: String,
    lastName: String,
    dateOfBirth: Date,
    address: {
        street: String,
        city: String,
        state: String,
        pinCode: Number
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model("User", userSchema);