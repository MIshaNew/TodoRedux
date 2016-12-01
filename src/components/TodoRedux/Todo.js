import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTodo, deleteTodo, toggleStatus, active, completed, showAll } from '../../actions/action';

class Todo extends Component{
  constructor(props){
    super(props);
    this.addItem = this.addItem.bind(this);
  }

  addItem() {
    this.props.addItem(this.todoInput.value);
    this.todoInput.value = '';
  }

  render(){
    const { testStore } = this.props;
    return(
      <div>
        <input type="text" ref={(input) => { this.todoInput = input }} />
        <button onClick={this.addItem}>Add todo</button>
        <ol>
          {
            testStore.todos.map((c, i) => 
              <li key={i}>
              <input type="checkbox" checked={c.status} onClick={() => this.props.toggleItem(i)}></input>
                {c.item}
                <button type="button" onClick={() => this.props.deleteItem(i)} >delete{i}</button>
              </li>)
          }
        </ol>
        <button type="button" onClick={this.props.showAll}>All</button>
        <button type="button" onClick={this.props.activeItem}>Active</button>
        <button type="button" onClick={this.props.completedItems}>Completed</button>
      </div>
    );
  }
}

export default connect(
  state => ({
    testStore: state
  }),
  dispatch => ({
    addItem: (item) => {
      dispatch(addTodo(item));
    },
    deleteItem: (i) => {
      dispatch(deleteTodo(i));
    },
    toggleItem: (id) => {
      dispatch(toggleStatus(id))
    },
    completedItems: () => {
      dispatch(completed());
    },
    activeItem: () => {
      dispatch(active());
    },
    showAll: () => {
      dispatch(showAll())
    }
  })
)(Todo);