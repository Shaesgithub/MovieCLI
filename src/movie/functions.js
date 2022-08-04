const Movie = require("./model")

// CREATE
// node src/app.js --create --title "required content" --actor "" --director "" --review ""
exports.createMovie = async (movieObject) => {

    try {

      const newMovie = await Movie.create(movieObject);
      console.log(newMovie);

    } catch (error) {

        console.log(error);
    }
};

// READ ALL
// node src/app.js --read
exports.readMovie = async () => {

    try {

        const results = await Movie.find()
        console.log(results);
    }

    catch (error) {

        console.log(error);
    }
}

// UPDATE ACTOR
// node src/app.js --update --title "selected movie" --actor "new actor name"
exports.updateMovie = async (yargObj) => {

    try {

        const editMovie = await Movie.updateOne({title: yargObj.title}, {$set: {actor: yargObj.actor}});
        console.log(editMovie);
    }

    catch (error) {

        console.log(error);
    }
}


// DELETE
// node src/app --delete --title "content"
exports.deleteMovie = async (yargObj) => {
    
    try {
        const delMovie = await Movie.deleteOne({ title: yargObj.title });
        console.log(delMovie);
    } catch (error) {
        console.log(error);
    }
};