import Vue from 'vue'
import Vuex from 'vuex'
import { mutations } from './mutations'
import * as actions from './actions'

Vue.use(Vuex)

const state = {
  user: {},
  counts: {
    count: -1
  },
  
  post: [
    {
      user: 'Charon',
      title: 'Welcome',
      body: 'Abandom all hope you who enter here'
    },
    {
      user: 'Tester',
      title: 'Hey toro user, looking for a good time?',
      body: 'check out csc 583'
    },
  ],
  
  // post: {},
  // post: [],
  friendpath:[]
}

export default new Vuex.Store({
  state,
  mutations,
  actions
})
