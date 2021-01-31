import './styles.css';
import { Todo, TodoList } from './classes'; //en la carpeta classes hay un archivo index.js que contiene todas las clases exportables
import { crearTodoHtml } from './js/componentes';

const tarea = new Todo('Aprender Javascript');
const todoList = new TodoList();

console.log(tarea);
console.log(todoList);

crearTodoHtml(tarea);
