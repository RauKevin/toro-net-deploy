import * as types from './mutation-types'

export const mutations = {
  [types.GET_USER] (state, user) {
    state.user = user
  },
  [types.GET_COUNT] (state, count_payload) {
    state.counts = count_payload
  },
  [types.INC_COUNT] (state, count_payload) {
    state.counts.count = count_payload
  },
  [types.REGISTER] (state, user_payload) {
    state.user = user_payload
  },
  [types.LOGIN] (state, user_payload) {
    state.user = user_payload
  },
  [types.LOGOUT] (state) {
    state.user = {}
  },
  [types.GET_POSTS] (state, posts_payload) {
    state.post = posts_payload
  },
  [types.ADD_POST] (state, posts_payload) {
    console.log("The post Payload")
    console.log(posts_payload)
    state.post = posts_payload
  },
  [types.GET_TREE] (state,tree_payload) {
    // uncomment once friend tree is hooked up
    // state.friendpath = tree_payload

    //remove everything below this line after friend tree is established on the backend
    const obj = [{name: "me <3 csc583"},{name:"Toro_User1"},{name:"Toro_User2"},{name:"Toro_User3"}, {name:"Jesus"}, {name:"Jose"},{name:"Maria"}];
    state.friendpath = obj;
    console.log('GET_TREE called');
  },
  
}
