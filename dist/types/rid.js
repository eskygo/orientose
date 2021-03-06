'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _type = require('./type');

var _type2 = _interopRequireDefault(_type);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _orientjs = require('orientjs');

var _orientjs2 = _interopRequireDefault(_orientjs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var RIDType = function (_Type) {
	_inherits(RIDType, _Type);

	function RIDType() {
		_classCallCheck(this, RIDType);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(RIDType).apply(this, arguments));
	}

	_createClass(RIDType, [{
		key: '_serialize',
		value: function _serialize(value) {
			// if ( value[0] !== "#" ) {
			// value = "#" + value;
			// }
			var record = new _orientjs.RecordID(value);

			if (!record) {
				throw new Error('Problem with parsing of RID: ' + value);
			}

			return record;
		}
	}, {
		key: '_deserialize',
		value: function _deserialize(value) {

			// return value.substr(1);
			return value;
		}
	}, {
		key: 'toObject',
		value: function toObject(options) {
			return this.value;
		}
	}, {
		key: 'toJSON',
		value: function toJSON(options) {
			return this.value ? this.value : null;
		}
	}], [{
		key: 'toString',
		value: function toString() {
			return 'String';
		}
	}, {
		key: 'getDbType',
		value: function getDbType(options) {
			return 'LINK';
		}
	}]);

	return RIDType;
}(_type2.default);

exports.default = RIDType;