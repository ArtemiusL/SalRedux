import React from 'react';
import PropTypes from 'prop-types';

class Display extends React.Component {
    render() {
        const {name, lastName, patronymic, dateDay, dateMonth, dateYear, tel, city, email, credit} = this.props;
        return (
        	<div className="main-blank__item">
            Здравствуйте, меня зовут {`${lastName} ${name} ${patronymic}`} я из города {`${city}`}. <br />
            Год рождения: {`${dateDay} ${dateMonth} ${dateYear}`}. <br />
            Моя кредитная история такова {`${credit}`}. <br />
            Хочу получить кредит в вашем банке. <br />
            Мои контакты для связи: <br />
            Телефон - {`${tel}`}. <br />
            Email - {`${email}`}
        	</div>
        )
    }
}

Display.propTypes = {
  name: PropTypes.string,
  value: PropTypes.string,
}

export default Display;
