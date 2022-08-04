const Tv = require("./model")

// CREATE
// node src/app.js --createTv --title "required content" --actor "" --review ""
exports.createTv = async (tvObject) => {

    try {

      const newShow = await Tv.create(tvObject);
      console.log(newShow);

    } catch (error) {

        console.log(error);
    }
};

// READ ALL
// node src/app.js --readTv
exports.readTv = async () => {

    try {

        const listShows = await Tv.find()
        console.log(listShows);
        
    } catch (error) {

        console.log(error);
    }
}

// UPDATE ACTOR
// node src/app.js --updateTv --title "selected show" --actor "new actor name"
exports.updateTv = async (yargObj) => {

    try {

        const editTv = await Tv.updateOne({title: yargObj.title}, {$set: {actor: yargObj.actor}});
        console.log(editTv);

    } catch (error) {

        console.log(error);
    }
}


// DELETE
// node src/app --deleteTv --title "content"
exports.deleteTv = async (yargObj) => {
    
    try {
        const delTv = await Tv.deleteOne({ title: yargObj.title });
        console.log(delTv);

    } catch (error) {

        console.log(error);
    }
};