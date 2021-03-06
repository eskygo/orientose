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

var BooleanType = function (_Type) {
	_inherits(BooleanType, _Type);

	function BooleanType() {
		_classCallCheck(this, BooleanType);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(BooleanType).apply(this, arguments));
	}

	_createClass(BooleanType, [{
		key: '_serialize',
		value: function _serialize(value) {
			if (typeof value === 'string') {
				value = value.toLowerCase();
				if (value === 'true' || value === 'yes' || value === '1') {
					return true;
				}

				return false;
			}

			return Boolean(value);
		}
	}, {
		key: '_deserialize',
		value: function _deserialize(value) {
			return value;
		}
	}], [{
		key: 'toString',
		value: function toString() {
			return 'Boolean';
		}
	}, {
		key: 'getDbType',
		value: function getDbType(options) {
			return 'BOOLEAN';
		}
	}]);

	return BooleanType;
}(_type2.default);

exports.default = BooleanType;