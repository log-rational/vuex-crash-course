// import axios from "axios";

import axios from "axios";

const state = {
  todos: [],
};
const getters = {
  allTodos: (state) => state.todos,
};

const actions = {
  async fetchTodos({ commit }) {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/todos"
    );
    console.log(response.data);
    commit("setTodos", response.data);
  },

  async addTodo({ commit }, title) {
    const respones = await axios.post(
      "https://jsonplaceholder.typicode.com/todos",
      {
        title,
        completed: false,
      }
    );
    commit("newTodo", respones.data);
  },
  async deleteTodo({ commit }, id) {
    commit("removeTodo", id);
    console.log("Deleteting item " + id);
    await axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`);
  },

  async filterTodos({ commit }, e) {
    const limit = parseInt(
      e.target.options[e.target.options.selectedIndex].innerText
    );
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/todos?_limit=${limit}`
    );
    commit("setTodos", response.data);
  },
};
const mutations = {
  setTodos: (state, todos) => (state.todos = todos),
  newTodo: (state, todo) => state.todos.unshift(todo),
  removeTodo: (state, id) =>
    (state.todos = state.todos.filter((d) => d.id !== id)),
};

export default {
  state,
  getters,
  actions,
  mutations,
};
