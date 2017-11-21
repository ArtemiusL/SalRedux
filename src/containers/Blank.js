import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import {addBlank} from '../actions';

class Blanks extends React.Component {
    render() {
    	let input;
    	let {dispatch} = this.props;
    	console.log(this.props);
        return (
        	<div>
        		<form onSubmit={e => {
        			e.preventDefault();
        			if(!input.value.trim()){
        				return;
        			}
        			dispatch(addBlank(input.value))
        		}}>
        		<label>
        		Ваше имя
        		<input ref={node => {
        			input = node
        		}} />
        		</label>
        		<button>
        		 Отправить
        		</button>
        		</form>
        	</div>
        )
    }
}
let Blank = connect()(Blanks);

Blanks.propTypes = {
  dispatch: PropTypes.func.isRequired,
}

export default Blank;