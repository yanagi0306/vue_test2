import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    todosFilter: [],
    todos: [],
    type: 'All'
  },
  mutations: {
    toggleTodos(state, id) {
      state.todos[id].completed = !state.todos[id].completed
    },
    addTodo: (state, todo) => {
      state.todos = [...state.todos, todo]
    },
    changeFilter: (state, filter) => {
      state.type = filter
    },
    del(state, id) {
      state.todos.splice(id, 1);
    },
    reset(state) {
      state.todos.forEach((value, index) => {
        state.todos[index].id = index
      })
    }
  },
  actions: {
    addTodo(context, todo) {
      context.commit('addTodo', todo)
    },
    del(context, id) {
      context.commit('del', id)
      context.commit('reset')
    },
    toggleTodos(context, id) {
      context.commit('toggleTodos', id)
    },
    changeFilter(context, type) {
      context.commit('changeFilter', type)
    },
  },
  getters: {
    todos(state) {
      return state.todos
    },
    type(state) {
      return state.type
    },
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
})
