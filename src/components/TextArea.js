/* eslint-disable jsx-a11y/label-has-for */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/forbid-prop-types */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class TextArea extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    rows: PropTypes.number.isRequired,
    cols: PropTypes.number.isRequired,
    value: PropTypes.string.isRequired,
    handleChange: PropTypes.func.isRequired,
    placeholder: PropTypes.string.isRequired,
    style: PropTypes.object.isRequired,
  }

  render() {
    return (
      <div className="form-group">
        <label className="form-label">{this.props.title}</label>
        <textarea
          className="form-control"
          name={this.props.name}
          rows={this.props.rows}
          cols={this.props.cols}
          value={this.props.value}
          onChange={this.props.handleChange}
          placeholder={this.props.placeholder}
          style={this.props.style}
        />
      </div>
    );
  }
}
