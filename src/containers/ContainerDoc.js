import React from 'react';
import { connect } from 'react-redux';
import AppDoc from '../components/AppDoc';


const mapStateToProps = (state, ownProps) => {
  return {
  	documentList: state
  };
}


let ContainerDoc = connect(mapStateToProps)(AppDoc);

export default ContainerDoc;