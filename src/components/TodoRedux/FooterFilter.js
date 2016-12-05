import React from 'react';
import { connect } from 'react-redux';
import { loadTodo } from '../../actions/action';

let Footer = ({ dispatch }) => {
  return (
    <div>
      <button type="button" onClick={() => dispatch(loadTodo('SHOW_ALL'))}>All</button>
      <button type="button" onClick={() => dispatch(loadTodo('ACTIVE'))}>Active</button>
      <button type="button" onClick={() => dispatch(loadTodo('COMPLETED'))}>Completed</button>
    </div>
  )
}

export default connect()(Footer);
