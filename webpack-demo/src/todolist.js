export default class Todos {
  constructor() {
    this.list = localStorage.getItem('todoItems')
      ? JSON.parse(localStorage.getItem('todoItems'))
      : [];
  }

  addItems(todo) {
    this.list.push(todo);
    localStorage.setItem('todoItems', JSON.stringify(this.list));
  }

  removeItems(todoID) {
    this.list = this.list.filter((todo) => todo.id !== todoID);
    this.list.forEach((todo, index) => {
      todo.index = index + 1;
    });
    localStorage.setItem('todoItems', JSON.stringify(this.list));
  }

  editTodo(todoId, todoDescription) {
    this.list = this.list.map((todo) => {
      if (todo.id === todoId) {
        return { ...todo, description: todoDescription };
      }
      return todo;
    });
    localStorage.setItem('todoItems', JSON.stringify(this.list));
  }

  completeTodo(todoId, status) {
    const selected = this.list.findIndex((element) => element.id === todoId);
    this.list[selected].completed = status;
    localStorage.setItem('todoItems', JSON.stringify(this.list));
  }

  clearCompletedTodos() {
    this.list = this.list.filter((todo) => !todo.completed);
    this.list.forEach((todo, index) => {
      todo.index = index + 1;
    });
    localStorage.setItem('todoItems', JSON.stringify(this.list));
  }
}
