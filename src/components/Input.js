import React from 'react';
import PropTypes from 'prop-types';

class Input extends React.Component {
    render() {
    	let input;
    	let onKeyDown = this.props.onKeyDown;
        let name = this.props.name;
        let onBlur = this.props.onBlur;
        return (
        		<input 
                required 
                name={name} 
                type={this.props.type} 
                onChange={e => {
        			onKeyDown(e.target.value, name)
        		}} 
                ref={node => {
        			input = node
        		}}
                onBlur={e => {
                    onBlur(e.target.value);
                }} />
        )
    }
}

Input.propTypes = {
  name: PropTypes.string,
  onKeyDown: PropTypes.func.isRequired,
  onBlur: PropTypes.func,
  type: PropTypes.string
}

export default Input;
