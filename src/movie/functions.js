const Movie = require("./model")

exports.createMovie = async (movieObject) => {

    // CRUD

    try {

      const newMovie = await Movie.create(movieObject);
      console.log(newMovie);

    } catch (error) {

        console.log(error);
    }
};

exports.readMovie = async () => {

    try {

        const results = await Movie.find()
        console.log(results);
    }

    catch (error) {

        console.log(error);
    }
}

exports.updateMovie = async (query, replacement) => {

    try {

        await Movie.replaceOne(query, replacement)
    }

    catch (error) {

        console.log(error);
    }
}

exports.deleteMovie = async (query) => {

    try {

        await Movie.deleteOne(query)
    }

    catch (error) {

        console.log(error);
    }
}