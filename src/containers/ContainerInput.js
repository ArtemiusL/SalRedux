import { connect } from 'react-redux';
import Input from '../components/Input';
import {addBlank} from '../actions/index';
import {validation} from '../Util/validation';

const mapStateToProps = (state, ownProps) => {
   // Находим нужный объект
  const newState = state.filter((item) => {
    return item.name === ownProps.name
  });
   // Берем регулярное выражение
  const condition = newState[0].validation;
  //Создаём регэкс
  const regexp = new RegExp(condition, 'i');
  return {
    state: newState[0],
    onBlur: (value) => {
      validation(regexp, value);
    }
  } 
}

const mapDispatchProps = (dispatch) => {
  return {
    onKeyDown: (text, name) => {
      let goodText = text[0].toUpperCase() + text.slice(1);
      console.log(`Это гуд-текст - ${goodText}`);
      dispatch(addBlank(goodText, name));
    }
  }
}

const ContainerInput = connect(mapStateToProps, mapDispatchProps)(Input);

export default ContainerInput;