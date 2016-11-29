import { connect } from 'react-redux'
import { addTodo } from '../actions'

import AddTodoForm from '../components/AddTodoForm'

const mapDispatchToProps = (dispatch) => {
  return {
    onSubmit: (text) => {
      dispatch(addTodo(text))
    }
  }
}

let AddTodo = connect(null, mapDispatchToProps)(AddTodoForm)

export default AddTodo