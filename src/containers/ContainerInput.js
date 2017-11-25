import { connect } from 'react-redux';
import Input from '../components/Input';
import {addBlank} from '../actions/index';

const mapStateToProps = (state, ownProps) => {
  const newState = state.filter((item) => {
    return item.name === ownProps.name
  })
  return {
    state: newState[0]
  } 
}

const mapDispatchProps = (dispatch) => {
  return {
    onKeyDown: (text, name) => {
      dispatch(addBlank(text, name))
    }
  }
}

const ContainerInput = connect(mapStateToProps, mapDispatchProps)(Input);

export default ContainerInput;