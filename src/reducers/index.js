import React from 'react';

const initialState = [
	{
		name: 'name',
		label: 'Имя',
		text: '',
		type: 'text',
		validation: new RegExp('^[А-Яё]+$', 'i'),
		validationText: 'Имя должно быть написано русскими буквами'
	},
	{
		name: 'lastName',
		label:'Фамилия',
		text: '',
		type: 'text',
		validation: new RegExp('^[А-Яё]+$', 'i'),
		validationText: 'Фамилия должна быть написана русскими буквами'
	},
	{
		name: 'patronymic',
		label:'Отчество',
		text: '',
		type: 'text',
		validation: new RegExp('^[А-Яё]+$', 'i'),
		validationText: 'Отчество должно быть написано русскими буквами'
	},
	{
		name: 'dateDay',
		label: 'День рождения',
		text: '',
		lowerLimit: 1,
		upperLimit: 31,
		reverse: false
	},
	{
		name: 'dateMonth',
		label: 'Месяц рождения',
		text: '',
		variant: ['Январь', 'Феварль', 'Март', 'Апрель', 'Май','Июнь', 
		'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь']
	},
	{
		name: 'dateYear',
		label: 'Год рождения',
		text: '',
		lowerLimit: 1941,
		upperLimit: 1998,
		reverse: true
	},
	{
		name: 'tel',
		label:'Мобильный телефон',
		text: '',
		type: 'tel',
		validation: new RegExp('^[0-9]{11}$', 'i'),
		validationText: 'Телефон указан неверно. Должно быть 11 цифр, например: 89011234567'
	},
	{
		name: 'city',
		label:'Город проживания',
		text: ' ',
		type: 'text',
		validation: new RegExp('^[А-Я]+$', 'i'),
		validationText: 'Город должен быть написан русскими буквами'
	},
	{
		name: 'email',
		label:'Email',
		text: ' ',
		type: 'email',
		validation: new RegExp('^[a-z0-9]+?@[a-z0-9]+?\\.[a-z]{2,6}$', 'i'),
		validationText: 'Укажите корректный email. Например: name@mail.ru'
	},
	{
		name: 'credit',
		label: 'Кредитная история',
		text: ' ',
		variant: ['Есть кредит, были просрочки платежа', 'Есть текущая просроченная задолженность',
		 'Есть кредит, просрочек нет', 'Никогда не брал кредит',
		 'Кредит погашен, были просрочки','Кредит погашен, просрочек не было']
	},
]


const reduceBlank = (state = initialState, action) => {
	switch (action.type) {
		case 'ADD_BLANK':
			return state.map((item) => {
				if(item.name == action.name) {
					item.text = action.text;
				}
				return item;
			});;
		default: 
			return state 
	}
}


export default reduceBlank;