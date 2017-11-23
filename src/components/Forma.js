import React from 'react';
import Blank from '../containers/Blank';

class Forma extends React.Component {
    render() {
        return ( 
        		<form>
        			<Blank name='Name'/>
        			<br />
        			<Blank name='LastName'/>
        			<br />
        			<Blank name='Number'/>
        		</form>
        )
    }
}

export default Forma;