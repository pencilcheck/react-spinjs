var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import React from 'react';
import PropTypes from 'prop-types';
import Spinner from 'spin.js';

export default class ReactSpinner extends React.Component {
  componentDidMount() {
    const { color, config } = this.props;
    const spinConfig = _extends({
      // a few sensible defaults
      width: 2,
      radius: 10,
      length: 7,
      // color should not overwrite config
      color
    }, config);

    this.spinner = new Spinner(spinConfig);
    this.spinner.spin(this.refs.container);
  }
  componentWillUnmount() {
    this.spinner.stop();
  }
  render() {
    return React.createElement('span', { ref: 'container' });
  }
}
ReactSpinner.propTypes = {
  // This object is passed in wholesale as the spinner config
  config: PropTypes.object,
  // This is a quick way to overwrite just the color on the config
  color: PropTypes.string.isRequired
};
ReactSpinner.defaultProps = {
  config: {},
  color: 'black'
};