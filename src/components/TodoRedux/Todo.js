import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadTodo } from '../../actions/action';
import AddTodo from './addTodo';
import Footer from './FooterFilter';
import TodoList from './TodoList';

class Todo extends Component{
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(loadTodo('SHOW_ALL'));
  }

  render() {
    const { storeList, filter } = this.props;
    return(
      <div>
        <p>TO DO List</p>
        <AddTodo />
        <ol>
          {
            storeList.filter((id) => {
              if (filter === 'COMPLETED') {
                return id.status === false;
              } else if (filter === 'ACTIVE') {
                return id.status === true
              }
              return storeList;
            }).map((c, i) => 
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
  filter: state.todoFilter
}))(Todo);