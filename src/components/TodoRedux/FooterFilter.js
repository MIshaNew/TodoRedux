import React from 'react';
import { connect } from 'react-redux';
import { check } from '../../actions/action';

let Footer = ({ dispatch }) => {
  return (
    <div>
      <button type="button" onClick={() => dispatch(check('SHOW_ALL'))}>All</button>
      <button type="button" onClick={() => dispatch(check('ACTIVE'))}>Active</button>
      <button type="button" onClick={() => dispatch(check('COMPLETED'))}>Completed</button>
    </div>
  )
}

export default connect()(Footer);
