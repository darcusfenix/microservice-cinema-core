import mongoose from "mongoose";

const Schema = mongoose.Schema,
    commentSchema = new Schema({
        "title": {
            "type": String,
            "required": true,
        },
        "message": {
            "type": String,
            "required": true,
        },
        "date": {
            "type": Date,
            "required": true,
            "default": new Date()
        },
        "rate": {
            "type": Number,
            "default": 0
        },
        "active": {
            "type": Boolean,
            "default": true
        },
        "movie": {
            "type": Schema.Types.ObjectId,
            "ref": "movie",
            "required": true,
        }
    });

export default commentSchema;
