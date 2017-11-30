import { connect } from 'react-redux';
import Input from '../components/Input';
import {addBlank} from '../actions/index';

const mapStateToProps = (state, ownProps) => {
  const newState = state.filter((item) => {
    return item.name === ownProps.name
  });
  const condition = /^[А-Я]$/i;
  return {
    state: newState[0],
    onBlur: (value) => {
      if(condition.test(value)) {
        console.log('ВСё ок!');
      }
      else {
        console.log('ВСэ стрем');
      }
    }
  } 
}

const mapDispatchProps = (dispatch) => {
  return {
    onKeyDown: (text, name) => {
      dispatch(addBlank(text, name));
    }
  }
}

const ContainerInput = connect(mapStateToProps, mapDispatchProps)(Input);

export default ContainerInput;