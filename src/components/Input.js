import React from 'react';
import PropTypes from 'prop-types';

class Input extends React.Component {
    render() {
    	let input;
    	let onKeyDown = this.props.onKeyDown;
        let name = this.props.name;
        let state = this.props.state;
        let label = state.label;
        let validationText = state.validationText;
        let onBlur = this.props.onBlur;
        return (
                <div className="form-flex__item">
                    <label>{label}</label>
            		<input 
                    required 
                    name={name} 
                    type={this.props.type} 
                    onChange={e => {
                        let value = e.target.value.trim().toLowerCase();
                        if(value) {
                           onKeyDown(value, name);
                        }

            		}} 
                    ref={node => {
            			input = node
            		}}
                    onBlur={e => {
                        onBlur(e.target);
                    }} /> 
                    <br />
                    <p className="form-flex__validation">{validationText}</p>
                </div>
        )
    }
}

Input.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string,
  onKeyDown: PropTypes.func.isRequired,
  onBlur: PropTypes.func,
  type: PropTypes.string,
  state: PropTypes.object
}

export default Input;
