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
    this.props.deleteItem(item)
  }

  toggleItem(c) {
    console.log(c);
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
              <input type="checkbox" onClick={() => this.toggleItem(c)}></input>
                {c}
                <button type="button" onClick={() => this.removeItem(c)} >delete</button>
              </li>)
          }
        </ol>
        <button type="button">All</button>
        <button type="button">Active</button>
        <button type="button">Completed</button>
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
      dispatch({ type: 'ADD_TODO', item: todoName, status: false });
    },
    deleteItem: (item) => {
      dispatch({ type: 'DELETE_TODO', name: item });
    },
    toggleItem: (index) => {
      dispatch({ type: 'DELETE_TODO', name: index });
    }
  })
)(Todo);