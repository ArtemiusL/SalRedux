import React from 'react';
import { connect } from 'react-redux';
import AppDoc from '../components/AppDoc';


const mapStateToProps = (state) => {
  return {
  	documentList: state
  };
}


let ContainerDoc = connect(mapStateToProps)(AppDoc);

export default ContainerDoc;