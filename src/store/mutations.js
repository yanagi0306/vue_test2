export default ({
  toggleTodos(state, id) {
    state.todos[id].completed = !state.todos[id].completed
  },
  addTodo: (state, todoName) => {
    const todo = { name: todoName, completed: false, id: state.todos.length }
    state.todos = [...state.todos, todo]
  },
  changeFilter: (state, type) => {
    state.type = type
  },
  del(state, currentId) {
    state.todos.splice(currentId, 1);
    state.todos.forEach((value, index) => {
      state.todos[index].id = index
    })
  }
})