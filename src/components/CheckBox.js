/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/label-has-for */
/* eslint-disable react/forbid-prop-types */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class CheckBox extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    options: PropTypes.array.isRequired,
    name: PropTypes.string.isRequired,
    selectedOptions: PropTypes.array.isRequired,
    handleChange: PropTypes.func.isRequired,
    style: PropTypes.object.isRequired,
  }

  render() {
    return (
      <div>
        <label htmlFor={this.props.name} className="form-label">{this.props.title}</label>
        <div className="checkbox-group">
          {this.props.options.map(option => (
            <label key={option}>
              <input
                className="form-checkbox"
                id={this.props.name}
                name={this.props.name}
                onChange={this.props.handleChange}
                value={option}
                checked={this.props.selectedOptions.indexOf(option) > -1}
                type="checkbox"
                style={this.props.style}
              />
              {option}
            </label>
          ))}
        </div>
      </div>
    );
  }
}
