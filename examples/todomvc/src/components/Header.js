import React, { Component } from 'react'
import PropTypes from 'prop-types'
import TodoTextInput from './TodoTextInput'
import Invoer from './Invoer';

export default class Header extends Component {
  static propTypes = {
    addTodo: PropTypes.func.isRequired
  }

  handleSave = (text) => {
    //todo remove
   // debugger;

    console.log(text);

    if (text!=='')
      //todo remove
      //debugger;
    console.log('this.props',this.props);
      this.props.addTodo(text);

  }

  render() {
    return (
      <header>
        <Invoer onSave={this.handleSave}></Invoer>
      </header>
    )
  }
}
