"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _keymirror = require("keymirror");

var _keymirror2 = _interopRequireDefault(_keymirror);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _keymirror2.default)({
	NOTUNIQUE: null, //basic index
	UNIQUE: null, //unique index
	FULLTEXT: null, //text index
	DICTIONARY: null //
});