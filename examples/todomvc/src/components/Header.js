import React, {Component} from 'react'
import PropTypes from 'prop-types'
import TodoTextInput from './TodoTextInput'

export default class Header extends Component {

  static propTypes = {
    addTodo: PropTypes.func.isRequired
  }

  handleSave = () => {
    //todo remove
    debugger;

    if (this.textInput.value != '') {
      this.props.addTodo(this.textInput.value)
    }
  }

  render() {
    return (
      <input ref={(input) =>{this.textInput =input;}} type="text" onChange={this.handleSave}/>
    )
  }


}
