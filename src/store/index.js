import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: null,
  },
  getters: {
    enviarUsuario(state){
      return state.user;
    },
  },
  mutations: {
    mutandoUsuario(state, datoUsuario){
      state.user = datoUsuario;
    },
  },
  actions: {
    user({commit}, datoUsuario){
      commit('mutandoUsuario', datoUsuario);
    },

  },
  modules: {
  }
})
