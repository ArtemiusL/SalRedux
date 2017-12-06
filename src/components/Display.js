import React from 'react';
import PropTypes from 'prop-types';

class Display extends React.Component {
    render() {
        return (
        	<div className="main-blank__item">
            <h3 className="main-blank__item-title">{this.props.name}</h3>
        	<p className="main-blank__item-value">{this.props.value}</p>
        	</div>
        )
    }
}

Display.propTypes = {
  name: PropTypes.string,
  value: PropTypes.string,
}

export default Display;
