"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.sendNotificacion = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _index = require("../configuration/index");

var _mqtt = require("mqtt");

var _mqtt2 = _interopRequireDefault(_mqtt);

var _log4js = require("log4js");

var _log4js2 = _interopRequireDefault(_log4js);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var log = _log4js2.default.getLogger("PUSH-NOTIFICATION");
var client = void 0;

var sendNotificacion = exports.sendNotificacion = function sendNotificacion(topic) {
    var message = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";


    console.log(_index.settings);
    console.log({ "topic": topic, "message": message });

    var activemqUrl = _index.settings.activemqUrl,
        activemqPort = _index.settings.activemqPort,
        activemqContext = _index.settings.activemqContext;

    var url = activemqUrl + ":" + activemqPort + "/" + activemqContext;

    if ((typeof message === "undefined" ? "undefined" : _typeof(message)) === "object") {

        message = message.toString();
    }

    log.debug({ "topic": topic, "message": message, "url": url });

    return new Promise(function (resolve, reject) {

        client = _mqtt2.default.connect(url);
        client.on("connect", function () {

            client.publish(topic, message, null, function (err) {

                if (err) {

                    log.error(err);
                    reject(0);
                }

                client.end();
                resolve(1);
            });
        });

        client.on("error", function () {

            reject(0);
        });
    });
};