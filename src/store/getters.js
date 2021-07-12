export default {

  displayTodos(state) {
    if (state.type == 'All') {
      return state.todos
    } else if (state.type == 'Working') {
      return state.todos.filter(todo => {
        return todo.completed == false
      })
    } else if (state.type == 'Done') {
      return state.todos.filter(todo => {
        return todo.completed == true
      })
    }
  }
}
