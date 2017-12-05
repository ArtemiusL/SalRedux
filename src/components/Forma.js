import React from 'react';
import FieldsContainer from '../containers/FieldsContainer';
import ContainerSelect from '../containers/ContainerSelect';
import PropTypes from 'prop-types';


class Forma extends React.Component {
    render() {
        return ( 
          <section className="site-left">
        		<form className="main-form">
              <h3 className="main-form__title"> Введите ваши персональные данные </h3>
              <div className="form-flex">
                <FieldsContainer />
                {/*<div className="form-flex__item--select"> 
                  <label>Дата рождения</label>
                  <div className="form-flex__item-date">
                    <ContainerSelect name={'dateDay'} />
                    <ContainerSelect name={'dateMonth'} />
                    <ContainerSelect name={'dateYear'} />
                  </div>
                </div>*/}
{/*                <div className="form-flex__item"> 
                  <label>Кредитная история</label>
                  <ContainerSelect name={'credit'} />
                </div>*/}
                
              </div>
        		</form>
          </section>
        )
    }
}

export default Forma;