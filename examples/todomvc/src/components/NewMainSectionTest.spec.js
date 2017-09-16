import React from 'react'
import { createRenderer } from 'react-test-renderer/shallow';
import MainSection from './MainSection'
import TodoItem from './TodoItem'
import Footer from './Footer'
import { SHOW_ALL, SHOW_COMPLETED } from '../constants/TodoFilters'

const setup = propOverrides => {
  const props = Object.assign({
    todos: [
      {
        text: 'Use Redux',
        completed: false,
        id: 0
      }, {
        text: 'Run the tests',
        completed: true,
        id: 1
      }
    ],
    actions: {
      editTodo: jest.fn(),
      deleteTodo: jest.fn(),
      completeTodo: jest.fn(),
      completeAll: jest.fn(),
      clearCompleted: jest.fn()
    }
  }, propOverrides)

  const renderer = createRenderer()
  renderer.render(<MainSection {...props} />)
  const output = renderer.getRenderOutput()

  return {
    props: props,
    output: output,
    renderer: renderer
  }
}

describe('components', () => {
  describe('MainSection', () => {

    })

    describe('footer', () => {
      it('should render', () => {
        const { output } = setup()

      console.log('output=',output);
        expect(output.type).toBe('div')
        expect(output.props.className).toBe('todo-list')
      })


    })

    describe('todo list', () => {

    })
  })
