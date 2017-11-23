import React from 'react';
import PropTypes from 'prop-types';
import Display from './Display';

class AppDoc extends React.Component {
    render() {
    	let documentList = this.props.documentList;
        return (
        		<div>
        			{documentList.map((item, index) => {
        				return (
        					<Display 
        					name={item.name}
        					text={item.text}
                            key={index} />
        					);
        			})}
        		</div>
        )
    }
}

AppDoc.propTypes = {
  documentList: PropTypes.array,
}

export default AppDoc;