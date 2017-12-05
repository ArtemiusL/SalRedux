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

const reduceBlank = (state = initialState, action) => {
	switch (action.type) {
		case 'ADD_FIELDS':
			return state;
		default: 
			return state;
	}
}


export default reduceBlank;