"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getMovieModel = undefined;

var _MovieModel = require("../models/MovieModel");

var _MovieModel2 = _interopRequireDefault(_MovieModel);

var _connectionProvider = require("../dataAccess/connectionProvider");

var _connectionProvider2 = _interopRequireDefault(_connectionProvider);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var getMovieModel = exports.getMovieModel = function () {
    var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
        var conn;
        return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        _context.prev = 0;
                        _context.next = 3;
                        return (0, _connectionProvider2.default)();

                    case 3:
                        conn = _context.sent;
                        return _context.abrupt("return", conn.model("comment", _MovieModel2.default));

                    case 7:
                        _context.prev = 7;
                        _context.t0 = _context["catch"](0);
                        throw _context.t0;

                    case 10:
                    case "end":
                        return _context.stop();
                }
            }
        }, _callee, this, [[0, 7]]);
    }));

    return function getMovieModel() {
        return _ref.apply(this, arguments);
    };
}();