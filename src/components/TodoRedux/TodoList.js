import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { deleteTodo, toggleStatus } from '../../actions/action';

let TodoList = ({ dispatch, desc, id, status }) => {
  return (
    <li>
      <input type="checkbox" checked={status} onClick={() => dispatch(toggleStatus(id))}></input>
      {desc}
      <button type="button" onClick={() => dispatch(deleteTodo(desc))} >delete</button>
    </li>
  )
}

TodoList.propTypes= {
  desc: PropTypes.string,
  id: PropTypes.number,
  status: PropTypes.bool,
  dispatch: PropTypes.func
}

TodoList = connect()(TodoList);
export default TodoList;