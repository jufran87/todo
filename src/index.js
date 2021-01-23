import './styles.css';
import { Todo, TodoList } from './classes'; //en la carpeta classes hay un archivo index.js que contiene todas las clases exportables

const tarea = new Todo('Aprender Javascript');
const tarea2 = new Todo('Comprar un unicornio');
const todoList = new TodoList();

console.log(tarea);
console.log(tarea2);
console.log(todoList);
