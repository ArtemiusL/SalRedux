import React from 'react';
import Forma from './Forma';
import Display from './Display';
import ContainerDoc from '../containers/ContainerDoc';


class App extends React.Component {
    render() {
        return (
        	<div className="container">
                <h1 className="site-title"> Заявка на получение кредита. </h1>
                <div className="site-flex">
        		<Forma />
        		<div className="site-right">
                    <section className="main-blank">
                      <h2 className="main-blank__title">Ваши персональные данные</h2>
                      <div className="blank-flex">
                        <ContainerDoc /> 
                      </div> 
                    </section>
                    
                </div>
                </div>
        	</div>
        )
    }
}

export default App; 