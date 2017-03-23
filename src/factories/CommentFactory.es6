import CommentModel from "../models/CommentModel";
import connectionProvider from "../dataAccess/connectionProvider";

export const getCommentModel = async function() {
    try {

        const conn = await connectionProvider();
        return conn.model("comment", CommentModel);

    } catch (err) {

        throw err;

    }

};
