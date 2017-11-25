import React from 'react';
import ContainerInput from '../containers/ContainerInput';
import PropTypes from 'prop-types';


class Forma extends React.Component {
    render() {
        return ( 
        		<form>
              <label> Ваше имя </label>
              <br />
              <ContainerInput name={'name'} />
              <br />
              <label> Ваш телефон </label>
              <br />
              <ContainerInput name={'tel'} />
              <br />
              <button>Отправить</button>
        		</form>
        )
    }
}

export default Forma;