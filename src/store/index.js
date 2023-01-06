import { createStore } from 'vuex'

export default createStore({
  state: {
    todos: []
  },
  getters: {
  },
  mutations: {
    storeTodos(state, playload) {
      state.todos = playload
    },
  },
  actions: {
  },
  modules: {
  }
})
