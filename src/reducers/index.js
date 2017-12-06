import React from 'react';

let initialState = {
	fields: [
		{
			name: 'name',
			value: ''
		},
		{
			name: 'lastName',
			value: ''
		},
		{
			name: 'patronymic',
			value: ''
		},
		{
			name: 'dateDay',
			value: ''
		},
		{
			name: 'dateMonth',
			value: ''
		},
		{
			name: 'dateYear',
			value: ''
		},
		{
			name: 'tel',
			value: ''
		},
		{
			name: 'city',
			value: ''
		},
		{
			name: 'email',
			value: ''
		},
		{
			name: 'credit',
			value: ''
		}
	]
};

const localFields = JSON.parse(localStorage.getItem('filds'));
//если есть данные в локал сторадже заменяем ими initialState
if (localFields) {
	initialState = localFields;
}
const fields = (state = [], action) => {
	switch (action.type) {
		case 'ADD_FIELD':
			return state.map((item) => {
				if(item.name === action.name) {
					item.value = action.value;
				}
				return item;
			})
	}
}
const reduceBlank = (state = initialState, action) => {
	switch (action.type) {
		case 'ADD_FIELD':
			return {
				fields: fields(state.fields, action)
			}
		default:
			return state;
	}
}


export default reduceBlank;
