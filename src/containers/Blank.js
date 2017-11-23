import React from 'react';
import { connect } from 'react-redux'
import {addBlank} from '../actions';
import Input from '../components/Input';

const mapStateToProps = (state, ownProps) => {
  return {
  	name: ownProps.name
  } 
}

const mapDispatchProps = (dispatch, ownProps) => {
  return {
    onKeyPress: (text, name) => {
      dispatch(addBlank(text, name))
    }
  }
}


let Blank = connect(mapStateToProps,mapDispatchProps)(Input);

export default Blank;