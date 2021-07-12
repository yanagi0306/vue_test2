import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import mutations from './mutations'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    todos: [],
    type: 'All'
  },

  actions: {
    addTodo(context, todo) {
      context.commit('addTodo', todo)
    },
    del(context, id) {
      context.commit('del', id)
    },
    toggleTodos(context, id) {
      context.commit('toggleTodos', id)
    },
    changeFilter(context, type) {
      context.commit('changeFilter', type)
    },
  },
  mutations,
  getters
})
