//Yargs CLI with MongoDB and Mongoose

require ("./db/connection");
const yargs = require ("yargs");
const mongoose = require ("mongoose");
const { createMovie, readMovie, updateMovie, deleteMovie } = require("./movie/functions")
const { createTv, readTv, updateTv, deleteTv } = require("./tv/functions");

const app = async (yargObject) => {
    
    try {
        
        if (yargObject.create) {

            // Add movie from terminal and save in database
            await createMovie({ title: yargObject.title, actor: yargObject.actor, director: yargObject.director, review: yargObject.review  });

        } else if (yargObject.read) {

            // List movies from database
            await readMovie({ title: yargObject.title, actor: yargObject.actor, director: yargObject.director, review: yargObject.review });
        
        } else if (yargObject.update) {

            // Update movie from database entry
            await updateMovie({ title: yargObject.title, actor: yargObject.actor, director: yargObject.director, review: yargObject.review});

        } else if (yargObject.delete) {

            // Delete movie from database entry
            await deleteMovie({ title: yargObject.title, actor: yargObject.actor, director: yargObject.director, review: yargObject.review });

        }  else if (yargObject.createTv) {

            // Add show from terminal and save in database
            await createTv({ title: yargObject.title, actor: yargObject.actor, review: yargObject.review });
      
        } else if (yargObject.readTv) {

            // List show from database
            await readTv({ title: yargObject.title, actor: yargObject.actor, review: yargObject.review });

        } else if (yargObject.updateTv) {

            // Update show from database entry
            await updateTv({ title: yargObject.title, actor: yargObject.actor, review: yargObject.review });
      
        } else if (yargObject.deleteTv) {

            // Delete movie from database entry
            await deleteTv({ title: yargObject.title, actor: yargObject.actor, review: yargObject.review });
        
        } else {

            console.log("Incorrect command");
        }

    } catch (error) {

        console.log(error);
    }

    await mongoose.disconnect();

};

app(yargs.argv);