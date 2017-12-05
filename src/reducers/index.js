import React from 'react';

let initialState = {
	fields: [
	{
		name: 'name', 
		text: ''
	},
	{
		name: 'lastName',
		text: ''
	},
	{
		name: 'patronymic',
		text: ''
	},
	{
		name: 'dateDay',
		text: ''
	},
	{
		name: 'dateMonth',
		text: ''
	},
	{
		name: 'dateYear',
		text: ''
	},
	{
		name: 'tel',
		text: ''
	},
	{
		name: 'city',
		text: ' '
	},
	{
		name: 'email',
		text: ' '
	},
	{
		name: 'credit',
		text: ' '
	}
]
};

const localFilds = JSON.parse(localStorage.getItem('filds'));
//если есть данные в локал сторадже заменяем ими initialState
if(localFilds) {
	initialState = localFilds;
}
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