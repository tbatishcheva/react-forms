/* eslint-disable react/forbid-prop-types */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Button extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    style: PropTypes.object.isRequired,
    action: PropTypes.func.isRequired,
  }

  render() {
    return (
      <button
        type="button"
        style={this.props.style}
        onClick={this.props.action}
      >
        {this.props.title}
      </button>
    );
  }
}
