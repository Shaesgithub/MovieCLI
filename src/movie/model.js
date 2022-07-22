const mongoose = require("mongoose");

// Create a mongoose schema for movies

const movieListSchema = new mongoose.Schema({


    title: {

        type: String,
        unique: true,
        required: true,
    },

    actor: {

        type: String,
        default: "No Main Actor Specified",

    },

    director: {

        type: String,
        default: "No Director Specified",

    },

    review: {
        
        type: String,
        default: "No Review Input",

    },

});

const Movie = mongoose.model("Movie", movieListSchema);

module.exports = Movie;
