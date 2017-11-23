import React from 'react';
import Blank from '../containers/Blank';
import { connect } from 'react-redux';
import {addBlank} from '../actions';
import Input from './Input';
import PropTypes from 'prop-types';


class Forma extends React.Component {
    render() {
        let state = this.props.state;
        let onKeyDown = this.props.onKeyDown;
        return ( 
        		<form>
        			{state.map((item, index) => {
                        return <Input
                                name={item.name}
                                onKeyDown={onKeyDown}
                                key={index}
                                type={item.type} />
                    })}
                    <button>Отправить</button>
        		</form>
        )
    }
}

Forma.propTypes = {
  state: PropTypes.array,
  onKeyDown: PropTypes.func,
}

const mapStateToProps = (state) => {
  return {
    state
  } 
}

const mapDispatchProps = (dispatch) => {
  return {
    onKeyDown: (text, name) => {
      dispatch(addBlank(text, name))
    }
  }
}

Forma = connect(mapStateToProps, mapDispatchProps)(Forma);
export default Forma;