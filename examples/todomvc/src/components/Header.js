import React, {Component} from 'react'
import PropTypes from 'prop-types'
import TodoTextInput from './TodoTextInput'

export default class Header extends Component {

  static propTypes = {
    addTodo: PropTypes.func.isRequireds
  }

  handleSave = text => {

    if (text.length > 0) {
      console.log('handlesave',text);
      this.props.addTodo(text);
    }
  }

  render = () => {
    return (
      <header className="header">
        <TodoTextInput onSave={this.handleSave}>
        </TodoTextInput>
      </header>)
  }


}
