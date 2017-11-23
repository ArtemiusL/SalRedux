import React from 'react';
import PropTypes from 'prop-types';

class Display extends React.Component {
    render() {
        return (
        	<div>
            <b>{this.props.name}</b>
            <br />
        	<span>{this.props.text}</span>
        	</div>
        )
    }
}

Display.propTypes = {
  text: PropTypes.string,
  name: PropTypes.string,
}

export default Display; 