import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    mobileMenu: false,
  },
  getters:{
    mobileMenu: state => {
      return state.mobileMenu;
    },
  },
  mutations: {
    setMobileMenu: function (state, newValue)  {
      state.mobileMenu = newValue;
    },
  },
  actions: {
  },
  modules: {
  }
})
