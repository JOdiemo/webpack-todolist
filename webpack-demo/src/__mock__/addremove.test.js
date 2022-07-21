import Todos from '../todolist.js';

document.body.innerHTML = `
<div class="container">
<h4 class="title">My Today's To do List</h4>
<form>
    <input class="description" type="text" placeholder="Add to your List..." autofocus />
    <button class="add-btn">
        <i class="fa-solid fa-arrows-rotate fa-icon"></i>
    </button>
</form>
<div class="todos">
</div>
<div class="clear">
    <a class="clear-btn">Clear All Completed Tasks</a>
</div>
</div>
`;
// Add and remove test
describe('add and remove', () => {
  // Add test
  test('addion test', () => {
    const todosList = new Todos();
    const newTodo = {
      id: '1234',
      description: 'testAdd1',
      completed: false,
      index: 1,
    };
    const newTodo1 = {
      id: '1235',
      description: 'testAdd2',
      completed: false,
      index: 2,
    };
    todosList.addItems(newTodo);
    expect(todosList.list).toHaveLength(1);
    todosList.addItems(newTodo1);
    expect(todosList.list).toHaveLength(2);
  });
  // Remove test
  test('removal test', () => {
    const todoList = new Todos();
    const newTodo = {
      id: '5678',
      description: 'testRemove1',
      completed: false,
      index: 3,
    };
    todoList.addItems(newTodo);
    todoList.removeItems(newTodo.id);
    expect(todoList.list[1].description).toBe('testAdd2');
    expect(todoList.list).toHaveLength(2);
  });
});
// edit test
describe('Edit and Clear', () => {
  test('Edit test', () => {
    const todoList = new Todos();
    const newTodo3 = {
      id: '9999',
      description: 'testEdit',
      completed: false,
      index: 4,
    }
    todoList.addItems(newTodo3);
    todoList.editTodo(newTodo3.id, 'Good Lord');
    expect(todoList.list[2].description).toMatch('Good Lord');
    expect(todoList.list).toHaveLength(3);
  })
  // Clear all completed test
  test('Clear All test', () => {
    const todoList = new Todos();
    const newTodo4 = {
      id: '5555',
      description: 'testEdit',
      completed: true,
      index: 5,
    }
    todoList.addItems(newTodo4);
    expect(todoList.list).toHaveLength(4);
    todoList.completeTodo(newTodo4.id, true);
    todoList.clearCompletedTodos() 
    expect(todoList.list).toHaveLength(3);
  });

})
const localStorageMock = (() => {
  let store = {};
  return {
    getItem(key) {
      return store[key];
    },
    setItem(key, value) {
      store[key] = value.toString();
    },
    clear() {
      store = {};
    },
    removeItem(key) {
      delete store[key];
    },
  };
})();
Object.defineProperty(window, 'localStorage', {
  value: localStorageMock,
});