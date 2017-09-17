import {ADD_TODO, DELETE_TODO, EDIT_TODO, COMPLETE_TODO, COMPLETE_ALL, CLEAR_COMPLETED} from '../constants/ActionTypes'

const initialState = [
  {
    text: 'Use Redux',
    completed: false,
    id: 0
  }
]

export default function todos(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO:
      const newid = state[state.length - 1].id + 1;
      //todo remove
      debugger;
      return [...state, {text: action.text, completed: false, id: newid}]

    case DELETE_TODO:
      return state.filter(t => t.id != action.id)

    case EDIT_TODO:
      return state.map((t) =>
        t.id == action.id ? {...t, text: action.text} : t
      )

    case COMPLETE_TODO:
      return state.map((t) =>
        t.id == action.id ? {...t, completed:!t.completed } : t
      )
    

    case CLEAR_COMPLETED:
      return state.filter(t => t.completed == false)


    default:
      return state
  }
}
