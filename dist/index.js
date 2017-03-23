"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Configuration = exports.ConnectionProvider = exports.getCommentModel = exports.getMovieModel = exports.CommentSchema = exports.MovieSchema = undefined;

var _MovieModel = require("models/MovieModel");

var _MovieModel2 = _interopRequireDefault(_MovieModel);

var _CommentModel = require("models/CommentModel");

var _CommentModel2 = _interopRequireDefault(_CommentModel);

var _MovieFactory = require("factories/MovieFactory");

var _MovieFactory2 = _interopRequireDefault(_MovieFactory);

var _CommentFactory = require("factories/CommentFactory");

var _CommentFactory2 = _interopRequireDefault(_CommentFactory);

var _connectionProvider = require("dataAccess/connectionProvider");

var _connectionProvider2 = _interopRequireDefault(_connectionProvider);

var _index = require("configuration/index");

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.MovieSchema = _MovieModel2.default;
exports.CommentSchema = _CommentModel2.default;
exports.getMovieModel = _MovieFactory2.default;
exports.getCommentModel = _CommentFactory2.default;
exports.ConnectionProvider = _connectionProvider2.default;
exports.Configuration = _index2.default;