'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _type = require('./type');

var _type2 = _interopRequireDefault(_type);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var StringType = function (_Type) {
	_inherits(StringType, _Type);

	function StringType() {
		_classCallCheck(this, StringType);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(StringType).apply(this, arguments));
	}

	_createClass(StringType, [{
		key: '_serialize',
		value: function _serialize(value) {
			var options = this.options;
			var val = String(value);

			if (options.enum && options.enum.indexOf(val) === -1) {
				throw new Error('Value is not from enum values');
			}

			if (options.minlength && val.length < options.minlength) {
				throw new Error('The value "' + val + '" is shorter than the minimum length ' + options.minlength);
			}

			if (val && options.maxlength && val.length > options.maxlength) {
				throw new Error('The value "' + val + '" is longer than the maxlength length ' + options.maxlength);
			}

			if (val && options.trim) {
				val = val.trim();
			}

			if (val && options.uppercase) {
				val = val.toUpperCase();
			}

			return val;
		}
	}, {
		key: '_deserialize',
		value: function _deserialize(value) {
			return value;
		}
	}], [{
		key: 'toString',
		value: function toString() {
			return 'String';
		}
	}, {
		key: 'getDbType',
		value: function getDbType(options) {
			return 'STRING';
		}
	}]);

	return StringType;
}(_type2.default);

exports.default = StringType;