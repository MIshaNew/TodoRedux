import React from 'react';
import { connect } from 'react-redux';
import { active, completed, showAll } from '../../actions/action';

let Footer = ({ dispatch }) => {
  return (
    <div>
      <button type="button" onClick={() => dispatch(showAll())}>All</button>
      <button type="button" onClick={() => dispatch(active())}>Active</button>
      <button type="button" onClick={() => dispatch(completed())}>Completed</button>
    </div>
  )
}

export default connect( state => ({ testStore: state.todoFilter }))(Footer);

// class Footer extends Component{
//   render(){
//     const { storeList, storeFilter } = this.props;
//     return(
//       <div>
//         <button type="button" onClick={() => dispatch(showAll())}>All</button>
//         <button type="button" onClick={() => dispatch(active())}>Active</button>
//         <button type="button" onClick={() => dispatch(completed())}>Completed</button>
//       </div>
//     );
//   }
// }

// export default connect( state => ({ storeFilter: state }))(Footer);