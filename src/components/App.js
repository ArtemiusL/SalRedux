import React from 'react';
import Forma from './Forma';
import Display from './Display';
import ContainerDoc from '../containers/ContainerDoc';


class App extends React.Component {
    render() {
        return (
        	<div className="site-container">
                <h1> Заявка на получение кредита. </h1>
                <div className="site-flex">
        		<Forma />
        		<ContainerDoc />
                </div>
        	</div>
        )
    }
}

export default App; 