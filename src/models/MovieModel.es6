import mongoose from "mongoose";

const Schema = mongoose.Schema,
    movieSchema = new Schema({
        "title": {
            "type": String,
            "required": true,
        },
        "duration": {
            "type": Number,
            "required": true,
        },
        "description": {
            "type": String,
            "required": true,
        },
        "imageUrl": {
            "type": String,
            "default": "http://lorempixel.com/300/400"
        },
        "userRate": {
            "type": Number,
            "default": 0
        },
        "rate": {
            "type": String,
            "required": true,
        },
        "active": {
            "type": Boolean,
            "default": true
        }

    });

export default movieSchema;
