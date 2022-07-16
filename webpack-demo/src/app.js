const thingsTodo = (todosList) => {
  const sortedItems = todosList.list.sort((a, b) => a.index - b.index);
  const itemsContainer = document.querySelector('.todos');
  let todosHtml = '';
  sortedItems.forEach(({ completed, description, id }) => {
    const checkedTodo = completed ? 'checked' : '';
    const checkClass = completed ? 'checked' : '';
    todosHtml += `  <div class="items">
                        <div>
                            <input id="${id}" class="check" type="checkbox" ${checkedTodo} />
                            <input id="${id}" class="edit ${checkClass}" type="text" value="${description}" />
                        </div>
                        <button id="${id}" class="remove-btn"> <i class="fas fa-trash"></i></button>
                    </div>
    `;
  });
  itemsContainer.innerHTML = todosHtml;

  // remove
  const removeBtns = document.querySelectorAll('.remove-btn');
  removeBtns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      const element = btn.parentNode;
      element.remove();
      todosList.removeItems(e.target.parentNode.id);
    });
  });

  // edit
  const todosContent = document.querySelectorAll('.edit');
  todosContent.forEach((todo) => {
    todo.addEventListener('input', (e) => {
      todosList.editTodo(e.target.id, e.target.value);
    });
  });

  // Complete
  const todosCheck = document.querySelectorAll('.check');
  todosCheck.forEach((todo) => {
    todo.addEventListener('change', (e) => {
      const { id } = e.target;
      todosList.completeTodo(id, e.target.checked);
      e.target.parentNode.lastElementChild.classList.toggle('checked');
    });
  });
};

export default thingsTodo;
