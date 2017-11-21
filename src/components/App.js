import React from 'react';
import Blank from '../containers/Blank';
import Display from './Display';


class App extends React.Component {
    render() {
        return (
        	<div>
        	Приветики!
        	<div style={{'display': 'flex', 'width': '500px', 'justifyContent': 'space-between'}}>
        		<Blank />
        		<Display />
        	</div>
        	</div>
        )
    }
}

export default App; 