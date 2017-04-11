"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.sendNotificacion = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _index = require("../configuration/index");

var _index2 = _interopRequireDefault(_index);

var _mqtt = require("mqtt");

var _mqtt2 = _interopRequireDefault(_mqtt);

var _log4js = require("log4js");

var _log4js2 = _interopRequireDefault(_log4js);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var log = _log4js2.default.getLogger("PUSH-NOTIFICATION");
var client = void 0;

var sendNotificacion = exports.sendNotificacion = function sendNotificacion(topic) {
    var message = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
    var activemqUrl = _index2.default.activemqUrl,
        activemqPort = _index2.default.activemqPort,
        activemqContext = _index2.default.activemqContext;

    var url = activemqUrl + ":" + activemqPort + "/" + activemqContext;

    if ((typeof message === "undefined" ? "undefined" : _typeof(message)) === "object") {

        message = message.toString();
    }

    log.debug(_index2.default);
    log.debug({ "topic": topic, "message": message });

    new Promise(function (resolve, reject) {

        client = _mqtt2.default.connect(url);
        client.on("connect", function () {

            client.publish(topic, message, null, function (err) {

                if (err) {

                    log.error(err);
                    reject();
                }

                client.end();
                resolve();
            });
        });

        client.on("error", function (error) {

            log.error(error);
            reject();
        });
    });
};