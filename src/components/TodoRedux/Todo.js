import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { load as loadTodos } from '../../actions/action';
import AddTodo from './addTodo';
import Footer from './FooterFilter';
import TodoList from './TodoList';

class Todo extends Component{
  static propTypes = {
    loadTodos: PropTypes.func.isRequired,
    filter: PropTypes.string,
    todos: PropTypes.array,
  }

  componentWillMount() {
    this.props.dispatch(this.props.loadTodos());

    // firebase.database().ref().once('value').then((snapshot) => {
    //   snapshot.forEach((data) => {
    //     const todos = data.val();
    //     console.log(todos);
    //   });
    // });
  }

  render() {
    const { todos, filter } = this.props;
    return(
      <div>
        <p>TO DO List</p>
        <AddTodo />
        <ol>
          {todos && todos.length > 0 &&
            todos.filter((id) => {
              if (filter === 'COMPLETED') {
                return id.status === true;
              } else if (filter === 'ACTIVE') {
                return id.status === false
              }
              return todos;
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

export default connect( 
  state => ({ 
    todos: state.todoList.todos,
    filter: state.todoFilter
  },
  {
    loadTodos
  }
))(Todo);