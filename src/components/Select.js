import React from 'react';
import PropTypes from 'prop-types';

class Select extends React.Component {
    render() {
        const state = this.props.state;
        let rows = [];
        let onKeyDown = this.props.onKeyDown;
        let name = this.props.name; 
        if(state.variant) {
            rows = state.variant.map((item, index) => {
                return <option key={index}>{item}</option>
            })
        }
        else {
        for (let i = state.lowerLimit; i <= state.upperLimit; i++) {
            rows.push(<option key={i}>{i}</option>);
        }
        if(state.reverse) {
            rows.reverse();
        }
        }
        return (
                <select
                    onChange={e => {
                        const value = e.target.value.trim();
                        onKeyDown(value, name)
                    }} >
                    {rows}
                </select>
        )
    }
}

Select.propTypes = {
  state: PropTypes.object,
  name: PropTypes.string,
  onKeyDown: PropTypes.func.isRequired
}

export default Select;
