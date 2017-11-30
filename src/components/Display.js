import React from 'react';
import PropTypes from 'prop-types';

class Display extends React.Component {
    render() {
        return (
        	<div className="main-blank__item">
            <h3 className="main-blank__item-title">{this.props.label}</h3>
        	<p className="main-blank__item-value">{this.props.text}</p>
        	</div>
        )
    }
}

Display.propTypes = {
  text: PropTypes.string,
  label: PropTypes.string,
}

export default Display; 