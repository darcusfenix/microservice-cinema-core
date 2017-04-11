"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function (url, database, options) {

    var opts = Object.assign({}, {
        "server": { "poolSize": 5 }
    }, options);

    return new Promise(function (resolve, reject) {
        var address = "mongodb://" + (_index.settings.mongodbUser !== null ? _index.settings.mongodbUser : "") + ":" + (_index.settings.mongodbPassword !== null ? _index.settings.mongodbPassword + '@' : "") + _index.settings.mongodbUrl + ":" + _index.settings.mongodbPort + "/" + _index.settings.mongodbDatabase;
        log.debug("address to mongodb: ", address);
        if (!internalConnectionPool[address]) {

            try {

                var conn = _mongoose2.default.createConnection(address, opts);
                conn.on("open", function () {

                    internalConnectionPool[address] = conn;
                    resolve(internalConnectionPool[address]);
                });

                conn.on("error", function (err) {

                    log.error("MongoDB error: ");
                    log.error(err);
                });
            } catch (err) {

                reject(err);
            }
        } else {

            return resolve(internalConnectionPool[address]);
        }
    });
};

var _mongoose = require("mongoose");

var _mongoose2 = _interopRequireDefault(_mongoose);

var _log4js = require("log4js");

var _log4js2 = _interopRequireDefault(_log4js);

var _index = require("../configuration/index");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var internalConnectionPool = {},
    log = _log4js2.default.getLogger("CONNECTION-MONGODB");