import './styles.css';

import { Todo, TodoList } from './classes'
import { crearTodoHtnl } from './js/componentes';


export const todoList = new TodoList();


todoList.todos.forEach( crearTodoHtnl );


// console.log( 'todos', todoList.todos );

