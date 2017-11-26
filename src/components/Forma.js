import React from 'react';
import ContainerInput from '../containers/ContainerInput';
import ContainerSelect from '../containers/ContainerSelect';
import PropTypes from 'prop-types';


class Forma extends React.Component {
    render() {
        return ( 
          <section className="site-left">
        		<form className="main-form">
              <h3 className="main-form__title"> Введите ваши персональные данные </h3>
              <div className="form-flex">

                <div className="form-flex__item"> 
                  <label>Фамилия</label>
                  <ContainerInput name={'lastName'} />
                </div>
                
                <div className="form-flex__item"> 
                  <label>Имя</label>
                  <ContainerInput name={'name'} />
                </div>

                <div className="form-flex__item"> 
                  <label>Отчество</label>
                  <ContainerInput name={'patronymic'} />
                </div>

                <div className="form-flex__item--select"> 
                  <label>Дата рождения</label>
                  <div className="form-flex__item-date">
                    <ContainerSelect name={'dateDay'} />
                    <ContainerSelect name={'dateMonth'} />
                    <ContainerSelect name={'dateYear'} />
                  </div>
                </div>

                <div className="form-flex__item"> 
                  <label>Мобильный телефон</label>
                  <ContainerInput name={'tel'} />
                </div>

                <div className="form-flex__item"> 
                  <label>Город проживания</label>
                  <ContainerInput name={'city'} />
                </div>

                <div className="form-flex__item"> 
                  <label>Email</label>
                  <ContainerInput name={'email'} />
                </div>

                <div className="form-flex__item"> 
                  <label>Кредитная история</label>
                  <ContainerSelect name={'credit'} />
                </div>

                <button>Отправить</button>
              </div>
        		</form>
          </section>
        )
    }
}

export default Forma;