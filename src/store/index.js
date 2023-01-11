import { createStore } from 'vuex';
import axios from 'axios'

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
    storeTodo(state,playload) {
      state.todos.push(playload)
  
    },
  },
 
  actions: {
    addTodo({ commit }, data) {
      return
      axios.post('http://localhost:3000/todos', data).then((response) => {
commit('storeTodo', response.data);
      }
      )
    }
},

    getters: {

    },

  modules: {
  }

})