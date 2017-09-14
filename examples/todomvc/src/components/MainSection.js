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
    todos: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired
  }

  state = {filter: SHOW_ALL}

  handleClearCompleted = () => {
    this.props.actions.clearCompleted()
  }

  handleShow = filter => {
    console.log('filter= and state.filter changed', filter);
    this.setState({filter})
  }


  renderFooter(completedCount) {
    const {todos} = this.props
    const {filter} = this.state
    const activeCount = todos.length - completedCount

    if (todos.length) {
      return (
        <Footer completedCount={completedCount}
                activeCount={activeCount}
                filter={filter}
                onClearCompleted={this.handleClearCompleted}
                onShow={this.handleShow}/>
      )
    }
  }

  render() {
    const {todos, actions} = this.props
    const {filter} = this.state


    console.log('Render:TODO_FILTERS[filter]=', filter);

    let filteredTodos = todos.filter(TODO_FILTERS[filter]);


    const completedCount = todos.reduce((count, todo) =>
        todo.completed ? count + 1 : count,
      0
    )

    //todo make sure not to put extra brackets in , in the map statement otherwise you dont see the items(see also Evernote todo mvc redux sample(code routine))
    return (
      <section className="main">
        <ul className="todo-list">
          {filteredTodos.map( t =>
         <TodoItem {...actions} todo={t}></TodoItem>
          )}
        </ul>
        {this.renderFooter(completedCount)}
      </section>
    )
  }
}
