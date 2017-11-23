import React from 'react';

const initialState = [
	{
		name: 'name',
		text: 'r',
		type: 'text'
	},
	{
		name: 'lastName',
		text: 'r',
		type: 'text'
	},
	{
		name: 'tel',
		text: 'r',
		type: 'date'
	}
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