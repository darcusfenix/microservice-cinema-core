"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
var settings = exports.settings = {
    "nameServer": "localhost",
    "mongodbUrl": process.env.MONGODB_URL ? process.env.MONGODB_URL : "localhost",
    "mongodbDatabase": process.env.MONGODB_DATABASE ? process.env.MONGODB_DATABASE : "cinema",
    "mongodbUser": process.env.MONGODB_USER ? process.env.MONGODB_USER : null,
    "mongodbPassword": process.env.MONGODB_PASSWORD ? process.env.MONGODB_PASSWORD : null,
    "mongodbPort": process.env.MONGODB_PORT ? process.env.MONGODB_PORT : 27017,
    "expressPort": process.env.EXPRESS_PORT ? process.env.EXPRESS_PORT : 3000,
    "activemqUrl": process.env.ACTIVEMQ_URL ? process.env.ACTIVEMQ_URL : "tcp://activemq.crisostomo.soy",
    "activemqPort": process.env.ACTIVEMQ_PORT ? process.env.ACTIVEMQ_PORT : 1883,
    "activemqContext": process.env.ACTIVEMQ_CONTEXT ? process.env.ACTIVEMQ_CONTEXT : "mqtt",
    "moviesTopic": process.env.MOVIES_TOPIC ? process.env.MOVIES_TOPIC : "movies",
    "commentsTopic": process.env.MOVIES_COMMENTS ? process.env.MOVIES_COMMENTS : "comments",
    "cache": {
        "password": "bfdf8aba8e784557af145db15f8703c1"
    },
    "session": {
        "password": "1652f8dfa00443589e12afb7ec37f2c5"
    }
};