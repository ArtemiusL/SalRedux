import React from 'react';
import PropTypes from 'prop-types';
import Display from './Display';
import {arrayToObject} from '../Util/arrayToObject';

class AppDoc extends React.Component {
    render() {
    	const {documentList} = this.props;
      const data = arrayToObject(documentList);
        return (
  				<Display
            {...data}
          />
        )
    }
}

AppDoc.propTypes = {
  documentList: PropTypes.array,
}

export default AppDoc;
