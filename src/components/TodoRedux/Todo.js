import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deleteTodo, toggleStatus } from '../../actions/action';
import AddTodo from './addTodo';
import Footer from './FooterFilter';
import TodoList from './TodoList';

class Todo extends Component{
  render(){
    const { storeList, store } = this.props;
    // console.log(store);
    return(
      <div>
        <p>TO DO List</p>
        <AddTodo />
        <ol>
          {
            storeList.map((c, i) => 
              <TodoList
                desc={c.item}
                id={i}
                key={i}
                status={c.status}
              />
            )
          }
        </ol>
        <Footer />
      </div>
    );
  }
}

export default connect( state => ({ 
  storeList: state.todoList.todos,
  store: state.todoList
}))(Todo);