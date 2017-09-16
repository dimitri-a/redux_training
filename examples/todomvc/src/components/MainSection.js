import React, {Component} from 'react'
import PropTypes from 'prop-types'
import TodoItem from './TodoItem'
import Footer from './Footer'
import {SHOW_ALL, SHOW_COMPLETED, SHOW_ACTIVE} from '../constants/TodoFilters'

const TODO_FILTERS = {
  [SHOW_ALL]: () => true,
  [SHOW_ACTIVE]: todo => !todo.completed,
  [SHOW_COMPLETED]: todo => todo.completed
}

export default class MainSection extends Component {

  static propTypes = {
    todos: PropTypes.func.isRequired,
    actions: PropTypes.func.isRequired,

  }

  render = () => {

    const todos = this.props.todos.map
    (
      (todo) => (
        <p> {todo.text}</p>
      )
    )

    return <div>
      <ul>
        {todos}
      </ul>

    </div>
  }

}
