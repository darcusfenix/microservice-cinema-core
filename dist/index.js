"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Configuration = exports.Comment = exports.Movie = undefined;

var _MovieFactory = require("factories/MovieFactory");

var _MovieFactory2 = _interopRequireDefault(_MovieFactory);

var _index = require("configuration/index");

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.Movie = _MovieFactory2.default;
exports.Comment = _MovieFactory2.default;
exports.Configuration = _index2.default;