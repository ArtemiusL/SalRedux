const DocumentList = (state, action) => {
	switch (action.type) {
		'ADD_BLANK': 
		return {
			text: action.text,
			name: action.name
		}
	}
}