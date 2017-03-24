"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _mongoose = require("mongoose");

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Schema = _mongoose2.default.Schema,
    commentSchema = new Schema({
    "title": {
        "type": String,
        "required": true
    },
    "message": {
        "type": String,
        "required": true
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
        "required": true
    }
});

exports.default = commentSchema;