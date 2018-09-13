import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import TodoList from '../../components/TodoList';

import {
  deleteTodo,
} from '../../actions';

const mapStateToProps = (state) => ({
  todos: state.getIn(['todo', 'todos'])
});

const mapDispatchToProps = (dispatch) => ({
  onDeleteTodo: (index) => () => (
    dispatch(deleteTodo({ index }))
  )
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TodoList);

const TodoList = ({
  todos,
  onDeleteTodo,
}) => (
  <div>
    <ul>
      {
        todos.map((todo, index) => (
          <li key={index}>
            {todo.get('text')}
            <button onClick={onDeleteTodo(index)}>X</button>
          </li>
        )).toJS()
      }
    </ul>
  </div>
);

export default TodoList;
