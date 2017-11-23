import React from 'react';
import PropTypes from 'prop-types';

class Input extends React.Component {
    render() {
    	let input;
    	let onKeyPress = this.props.onKeyPress;
        let name = this.props.name;
        return (
        		<input onKeyPress={e => {
        			console.log(e);
        			onKeyPress(e.target.value, name)
        		}} ref={node => {
        			input = node
        		}} />
        )
    }
}

Input.propTypes = {
  name: PropTypes.string,
  onKeyPress: PropTypes.func.isRequired
  
}

export default Input;
