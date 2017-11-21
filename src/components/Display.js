import React from 'react';
import { connect } from 'react-redux'
import PropTypes from 'prop-types';

const mapStateToProps = (state, ownProps) => {
  return {
    text: state.text
  }
}

class Displays extends React.Component {
    render() {
    	console.log(this.props.text);
        return (
        	<div>
        		{this.props.text}
        	</div>
        )
    }
}

Displays.propTypes = {
  text: PropTypes.string,
}

let Display = connect(mapStateToProps)(Displays);
export default Display; 