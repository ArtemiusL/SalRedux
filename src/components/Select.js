import React from 'react';
import PropTypes from 'prop-types';

class Select extends React.Component {
    render() {
        const {onChange, label, name, variant, lowerLimit, upperLimit} = this.props;
        let rows = [];
        if(variant) {
            rows = variant.map((item, index) => {
                return <option key={index}>{item}</option>
            })
        }
        else {
        for (let i = lowerLimit; i <= upperLimit; i++) {
            rows.push(<option key={i}>{i}</option>);
        }
        if(this.props.reverse) {
            rows.reverse();
        }
        }
        return (
          <div className="form-flex__item">
            <label>{label}</label>
            <select
                onChange={e => {
                    const value = e.target.value.trim();
                    onChange(value, name)
                }} >
                {rows}
            </select>
          </div>
        )
    }
}

Select.propTypes = {
  name: PropTypes.string,
  onChange: PropTypes.func.isRequired,

}

export default Select;
