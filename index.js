'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _spin = require('spin.js');

var _spin2 = _interopRequireDefault(_spin);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ReactSpinner = function (_React$Component) {
  _inherits(ReactSpinner, _React$Component);

  function ReactSpinner() {
    _classCallCheck(this, ReactSpinner);

    return _possibleConstructorReturn(this, (ReactSpinner.__proto__ || Object.getPrototypeOf(ReactSpinner)).apply(this, arguments));
  }

  _createClass(ReactSpinner, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _props = this.props,
          color = _props.color,
          config = _props.config;

      var spinConfig = _extends({
        // a few sensible defaults
        width: 2,
        radius: 10,
        length: 7,
        // color should not overwrite config
        color: color
      }, config);

      this.spinner = new _spin2.default(spinConfig);
      this.spinner.spin(this.refs.container);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.spinner.stop();
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement('span', { ref: 'container' });
    }
  }]);

  return ReactSpinner;
}(_react2.default.Component);

ReactSpinner.propTypes = {
  // This object is passed in wholesale as the spinner config
  config: _propTypes2.default.object,
  // This is a quick way to overwrite just the color on the config
  color: _propTypes2.default.string.isRequired
};
ReactSpinner.defaultProps = {
  config: {},
  color: 'black'
};
exports.default = ReactSpinner;