import React, { Component } from 'react';
import { connect } from 'react-redux';

class Todo extends Component{
  constructor(props){
    super(props);
    this.addItem = this.addItem.bind(this);
    this.removeItem = this.removeItem.bind(this);
    this.toggleItem = this.toggleItem.bind(this);
  }

  addItem() {
    this.props.addItem(this.todoInput.value);
    this.todoInput.value = '';
  }

  removeItem(item) {
    this.props.deleteItem(item);
  }

  toggleItem(i) {
    this.props.toggleItem(i);
  }

  render(){
    return(
      <div>
        <input type="text" ref={(input) => { this.todoInput = input }} />
        <button onClick={this.addItem}>Add todo</button>
        <ol>
          {
            this.props.testStore.map((c, i) => 
              <li key={i}>
              <input type="checkbox" onClick={() => this.toggleItem(i)}></input>
                {c.item}
                <button type="button" onClick={() => this.removeItem(c)} >delete</button>
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
    addItem: (todoName) => {
      dispatch({ type: 'ADD_TODO', item: todoName });
    },
    deleteItem: (item) => {
      dispatch({ type: 'DELETE_TODO', name: item });
    },
    completedItems: () => {
      dispatch({ type: 'COMPLETED_TODO' });
    },
    activeItem: () => {
      dispatch({ type: 'ACTIVE_TODO' });
    },
    toggleItem: (i) => {
      dispatch({ type: 'TOGGLE_STATUS', id: i })
    },
    showAll: () => {
      dispatch({ type: 'SHOW_ALL'})
    }
  })
)(Todo);