import MovieModel from "../models/MovieModel";
import connectionProvider from "../dataAccess/connectionProvider";

export const getMovieModel = async function() {
    try {

        const conn = await connectionProvider();
        return conn.model("comment", MovieModel);

    } catch (err) {

        throw err;

    }

};
