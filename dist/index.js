"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.settings = exports.ConnectionProvider = exports.getCommentModel = exports.getMovieModel = exports.CommentSchema = exports.MovieSchema = undefined;

var _MovieFactory = require("./factories/MovieFactory");

Object.defineProperty(exports, "getMovieModel", {
  enumerable: true,
  get: function get() {
    return _MovieFactory.getMovieModel;
  }
});

var _CommentFactory = require("./factories/CommentFactory");

Object.defineProperty(exports, "getCommentModel", {
  enumerable: true,
  get: function get() {
    return _CommentFactory.getCommentModel;
  }
});

var _index = require("./configuration/index");

Object.defineProperty(exports, "settings", {
  enumerable: true,
  get: function get() {
    return _index.settings;
  }
});

var _MovieModel = require("./models/MovieModel");

var _MovieModel2 = _interopRequireDefault(_MovieModel);

var _CommentModel = require("./models/CommentModel");

var _CommentModel2 = _interopRequireDefault(_CommentModel);

var _connectionProvider = require("./dataAccess/connectionProvider");

var _connectionProvider2 = _interopRequireDefault(_connectionProvider);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.MovieSchema = _MovieModel2.default;
exports.CommentSchema = _CommentModel2.default;
exports.ConnectionProvider = _connectionProvider2.default;