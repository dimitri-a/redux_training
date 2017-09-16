import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

export default class TodoTextInput extends Component {
  static propTypes = {
    onSave: PropTypes.func.isRequired,
    text: PropTypes.string,
    placeholder: PropTypes.string,
    editing: PropTypes.bool,
    newTodo: PropTypes.bool
  }

  state = {
    text: this.props.text || ''
  }

  handleSubmit = e => {
    console.log('TodoTextInput handlesubmit');
    const text = e.target.value.trim()
    if (e.which === 13) {
      console.log('todotextipunt onsave');
      this.props.onSave(text)
      if (this.props.newTodo) {
        this.setState({ text: '' })
      }
    }
  }

  handleChange = e => {
    console.log('TodoTextInput handlechange');
    this.setState({ text: e.target.value })
  }

  handleBlur = e => {
    console.log('TodoTextInput handleblur');
    if (!this.props.newTodo) {
      //todo remove
      debugger;
      this.props.onSave(e.target.value)
    }
  }

  render() {
    console.log('TodoTextInput render');
    return (
      <input className={
        classnames({
          edit: this.props.editing,
          'new-todo': this.props.newTodo
        })}
        type="text"
        placeholder={this.props.placeholder}
        autoFocus="true"
        value={this.state.text}
        onBlur={this.handleBlur}
        onChange={this.handleChange}
        onKeyDown={this.handleSubmit} />
    )
  }
}
