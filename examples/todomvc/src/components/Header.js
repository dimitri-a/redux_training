import React, {Component} from 'react'
import PropTypes from 'prop-types'
import TodoTextInput from './TodoTextInput'

export default class Header extends Component {

  static propTypes = {
    addTodo: PropTypes.func.isRequired,
  }

  handleSubmit() {
    console.log('handlesubmit');

  }

  render() {
    return <input type="text" onKeyDown={this.handleSubmit}/>
  }


}
