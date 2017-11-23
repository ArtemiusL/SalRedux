import { combineReducers } from 'redux';
import React from 'react';

const blankOne = (state, action) => {
	return {
		...state, 
		text: action.text, 
		name: action.name
	}
}

const reduceBlank = (state = [], action) => {
	switch (action.type) {
		case 'ADD_BLANK':
			return [
			...state,
			blankOne(undefined, action)
			]
		default: 
			return state 
	}
}


export default reduceBlank;