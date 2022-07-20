import Todos from '../todolist';

describe('add and remove', () =>{

test('add', () => {

  const todosList = new Todos();
  const newTodo = {
     id:"1234",
     description: testAdd1,
     completed: false,
     index: 1,
  };
  todosList.addItems(newTodo)
  expected(todosList.list).toHaveLength(1);

})

})

