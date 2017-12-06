import React, {Component} from 'react';
import { connect } from 'react-redux';
import {addField} from '../actions/index';
import {validation} from '../Util/validation';
import {data} from '../data/data';
import Input from '../components/Input';
import Select from '../components/Select';

class InputContainer extends Component {
  constructor() {
    super();
    this.onChange = this.onChange.bind(this);
  }

  onBlur(value) {
    // validation(regexp, value);
  }

  onChange(value, name) {
    const {onAddField} = this.props;
    onAddField(value, name);
  }

  createSelect(item, index, value){
     return(
         <Select {...item}
           key={`input-${index}`}
           onChange={this.onChange}
         />
       )
  }

  createInput(item, index, value){
    return(
        <Input {...item}
          key={`input-${index}`}
          onBlur={this.onBlur}
          value={value}
          onChange={this.onChange}
        />
      )
  }
  createList() {
    const {fields} = this.props;
    return data.map((item, index) => {
      const {name} = item;
      const curruntFields = fields.filter((field) => {
        return name === field.name;
      });
      const {value} = curruntFields[0];
      if(item.type) {
        return this.createInput(item, index, value);
      } else {
        return this.createSelect(item, index, value);
      }
    })
  }

  render() {
    const list = this.createList();
    return (
      <div>
        {list}
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    fields: state.fields,
  }
}

const mapDispatchProps = (dispatch) => {
  return {
    onAddField: (value, name) => {
      dispatch(addField(value, name))
    }
  }
}

export default connect(mapStateToProps, mapDispatchProps)(InputContainer);
