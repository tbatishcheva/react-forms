/* eslint-disable jsx-a11y/label-has-for */
/* eslint-disable react/forbid-prop-types */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Select extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    handleChange: PropTypes.func.isRequired,
    options: PropTypes.array.isRequired,
    placeholder: PropTypes.string.isRequired,
    style: PropTypes.object.isRequired,
  }

  render() {
    return (
      <div className="form-group">
        <label htmlFor={this.props.name}>
          {this.props.title}
        </label>
        <select
          name={this.props.name}
          value={this.props.value}
          onChange={this.props.handleChange}
          style={this.props.style}
        >
          <option value="" disabled>{this.props.placeholder}</option>
          {this.props.options.map(option => (
            <option
              key={option}
              value={option}
              label={option}
            >
              {option}
            </option>
          ))}
        </select>
      </div>
    );
  }
}
