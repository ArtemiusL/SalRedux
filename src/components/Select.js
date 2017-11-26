import React from 'react';
import PropTypes from 'prop-types';

class Select extends React.Component {
    render() {
        const state = this.props.state;
        let rows = [];
        
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
                <select>
                    {rows}
                </select>
        )
    }
}

Select.propTypes = {
  state: PropTypes.object
}

export default Select;
