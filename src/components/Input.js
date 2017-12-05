import React from 'react';
import PropTypes from 'prop-types';

class Input extends React.Component {
  constructor() {
    super();
    this.onChange = this.onChange.bind(this);
    this.onBlur = this.onBlur.bind(this);
  }

  onChange(e) {
    const onChange = this.props.onChange;
    let value = e.target.value.trim().toLowerCase();
    let name = e.target.name;
    if (value) {
      onChange(value, name);
    }
  }

  onBlur(e) {
    const { onBlur } = this.props;
    const { value, name } = e.target;
    onBlur(value, name);
  }

  render() {
    const {value, name, label, validationText, type} = this.props;
    return (
      <div className="form-flex__item">
        <label>{label}</label>
        <input
          required
          name={name}
          type={type}
          onChange={this.onChange}
          onBlur={this.onBlur}
          defaultValue={value} />
          <br />
          <p className="form-flex__validation">{validationText}</p>
      </div>
    )
  }
}

Input.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  onBlur: PropTypes.func,
  type: PropTypes.string,
  value: PropTypes.string,
  validationText: PropTypes.string
}

export default Input;
