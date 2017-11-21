import { combineReducers } from 'redux';
import React from 'react';

const reduceBlank = (state = '', action) => {
	switch (action.type) {
		case 'ADD_BLANK':
			return {
				text: action.text
			}
		default: 
			return state 
	}
}


export default reduceBlank;