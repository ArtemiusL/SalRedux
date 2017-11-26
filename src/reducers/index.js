import React from 'react';

const initialState = [
	{
		name: 'name',
		text: '',
		type: 'text'
	},
	{
		name: 'lastName',
		text: '',
		type: 'text'
	},
	{
		name: 'patronymic',
		text: '',
		type: 'text'
	},
	{
		name: 'dateDay',
		text: '',
		lowerLimit: 1,
		upperLimit: 31,
		reverse: false
	},
	{
		name: 'dateMonth',
		text: '',
		variant: ['Январь', 'Феварль', 'Март', 'Апрель', 'Май','Июнь', 
		'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь']
	},
	{
		name: 'dateYear',
		text: '',
		lowerLimit: 1941,
		upperLimit: 1998,
		reverse: true
	},
	{
		name: 'tel',
		text: '',
		type: 'tel'
	},
	{
		name: 'city',
		text: ' ',
		type: 'text'
	},
	{
		name: 'email',
		text: ' ',
		type: 'email'
	},
	{
		name: 'credit',
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