import React from 'react';
import Forma from './Forma';
import Display from './Display';
import ContainerDoc from '../containers/ContainerDoc';


class App extends React.Component {
    render() {
        return (
        	<div>
        	Приветики!
        	<div style={{'display': 'flex', 'width': '500px', 'justifyContent': 'space-between'}}>
        		<Forma />
        		<ContainerDoc />
        	</div>
        	</div>
        )
    }
}

export default App; 