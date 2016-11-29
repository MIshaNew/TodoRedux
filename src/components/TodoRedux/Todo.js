import React, { Component } from 'react';
import { connect } from 'react-redux';

class Todo extends Component{
  constructor(props){
    super(props);
    this.addItem = this.addItem.bind(this);
  }

  addItem() {
    this.props.onAddTodo(this.todoInput.value);
    this.todoInput.value = '';
  }

  render(){
    return(
      <div>
        <input type="text" ref={(input) => { this.todoInput = input }} />
        <button onClick={this.addItem}>Add todo</button>
        <ul>
          {
            this.props.testStore.map((c, i) => 
              <li key={i}>
                {c}
              </li>)
          }
        </ul>
      </div>
    );
  }
}

export default connect(
  state => ({
    testStore: state
  }),
  dispatch => ({
    onAddTodo: (todoName) => {
      dispatch({ type: 'ADD_TODO', item: todoName});
    }
  })
)(Todo);