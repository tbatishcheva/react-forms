/* eslint-disable jsx-a11y/label-has-for */
/* eslint-disable react/forbid-prop-types */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Input extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    handleChange: PropTypes.func.isRequired,
    placeholder: PropTypes.string.isRequired,
    style: PropTypes.object.isRequired,
  }

  render() {
    return (
      <div className="form-group">
        <label htmlFor={this.props.name} className="form-lavel">{this.props.title}</label>
        <input
          className="form-input"
          id={this.props.name}
          name={this.props.name}
          type={this.props.type}
          value={this.props.value}
          onChange={this.props.handleChange}
          placeholder={this.props.placeholder}
          style={this.props.style}
        />
      </div>
    );
  }
}
