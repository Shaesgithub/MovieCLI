const mongoose = require("mongoose");

// Create a mongoose schema for Tv Shows

const tvSchema = new mongoose.Schema({


    title: {

        type: String,
        unique: true,
        required: true,
    },

    actor: {

        type: String,
        default: "No Main Actor Specified",

    },

    review: {
        
        type: String,
        default: "No Review Input",

    },

});

const Tv = mongoose.model("Tv", tvSchema);

module.exports = Tv;
