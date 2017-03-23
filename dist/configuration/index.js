"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
var serverSettings = exports.serverSettings = {
    "nameServer": "localhost",
    "mongodbUrl": process.env.MONGODB_URL ? process.env.MONGODB_URL : "localhost",
    "mongodbDatabase": process.env.MONGODB_DATABASE ? process.env.MONGODB_DATABASE : "cinema",
    "mongodbUser": process.env.MONGODB_USER ? process.env.MONGODB_USER : "",
    "mongodbPassword": process.env.MONGODB_PASSWORD ? process.env.MONGODB_PASSWORD : "",
    "mongodbPort": process.env.MONGODB_PORT ? process.env.MONGODB_PORT : 27017,
    "expressPort": process.env.EXPRESS_PORT ? process.env.EXPRESS_PORT : 3000,
    "cache": {
        "password": "bfdf8aba8e784557af145db15f8703c1"
    },
    "session": {
        "password": "1652f8dfa00443589e12afb7ec37f2c5"
    }
};