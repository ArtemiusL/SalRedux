import React from 'react';
import PropTypes from 'prop-types';

class Input extends React.Component {
    render() {
    	let input;
    	let onKeyDown = this.props.onKeyDown;
        let name = this.props.name;
        return (
        		<input required name={name} type={this.props.type} onChange={e => {
        			onKeyDown(e.target.value, name)
        		}} ref={node => {
        			input = node
        		}} />
        )
    }
}

Input.propTypes = {
  name: PropTypes.string,
  onKeyDown: PropTypes.func.isRequired,
  type: PropTypes.string
}

export default Input;
