import React, { Component } from 'react'
import PropTypes from 'prop-types'
import TodoTextInput from './TodoTextInput'

export default class Header extends Component {
  static propTypes = {
    addTodo: PropTypes.func.isRequired
  }

  handleSave(text){
    //todo remove
    debugger;

    console.log(text);

    if (text.length> 0)
      this.props.addTodo(text);

  }

  render() {
    return (
      <header>
        <input type="text"  onClick={(input) => this.handleSave(input.target.value)}/>
      </header>
    )
  }
}
