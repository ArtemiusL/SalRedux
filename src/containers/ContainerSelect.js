import { connect } from 'react-redux';
import Select from '../components/Select';
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

const ContainerSelect = connect(mapStateToProps, mapDispatchProps)(Select);

export default ContainerSelect;