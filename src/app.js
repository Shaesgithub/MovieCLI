//Yargs CLI with MongoDB and Mongoose

require ("./db/connection");
const yargs = require ("yargs");
const mongoose = require ("mongoose");
const { createMovie, readMovie, updateMovie, deleteMovie } = require("./movie/functions")

const app = async (yargObject) => {
    
    // CRUD with yargs
    try {
        
        if (yargObject.create) {

            // Add movie from terminal and save in database
            await createMovie({ title: yargObject.title, actor: yargObject.actor, director: yargObject.director, review: yargObject.review  });

        } else if (yargObject.read) {

            // Search movie by title
            await readMovie({ title: yargObject.title, actor: yargObject.actor, director: yargObject.director, review: yargObject.review });
        
        } else if (yargObject.update) {

            // Update database entry
            await updateMovie({ title: yargObject.title, actor: yargObject.actor, director: yargObject.director, review: yargObject.review});
            

        } else if (yargObject.delete) {

            // Delete database entry
            await deleteMovie({ title: yargObject.title, actor: yargObject.actor, director: yargObject.director, review: yargObject.review });  
        
        } else {

            console.log("Incorrect command");
        }

    } catch (error) {

        console.log(error);
    }

    await mongoose.disconnect();

};

app(yargs.argv);