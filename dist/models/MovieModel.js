"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _mongoose = require("mongoose");

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Schema = _mongoose2.default.Schema,
    movieSchema = new Schema({
    "title": {
        "type": String,
        "required": true
    },
    "duration": {
        "type": Number,
        "required": true
    },
    "description": {
        "type": String,
        "required": true
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
        "required": true
    },
    "active": {
        "type": Boolean,
        "default": true
    }

});

exports.default = movieSchema;