import * as types from './mutation-types'
import axios from 'axios'

export const getUser = ({commit}) => {
  axios.get('/isauth')
  .then(function (response) {
    console.log('Retrieved user data: ', response.data);
    commit(types.GET_USER, response.data)
  })
  .catch(function (error) {
    console.log(error);
  });
}

export const getCount = ({commit}) => {
  fetch(`/count`, {
    method: 'GET'
  })
  .then(response => response.json())
  .then(json => commit(types.GET_COUNT, json))
}

export const incCount = ({commit}, countPayload) => {
  fetch(`/count`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json, text/plain, */*',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ count: ++countPayload })
  })
  .then(response => response.json())
  .then(json => commit(types.INC_COUNT, json))
}

export const login = ({commit}) => {
  axios.get('/isauth')
  .then(function (response) {
    commit(types.LOGIN, response.data)
  })
  .catch(function (error) {
    console.log(error);
  });
}

export const getPosts = ({commit}) => {
  axios.get('/posts')
  .then(function (response) {
    console.log('Retrieved posts: ', response.data);
    commit(types.GET_POSTS, response.data)
  })
  .catch(function (error) {
    console.log(error);
  });
}


export const logout = ({commit}) => {
  commit(types.LOGOUT)
}

export const register = ({commit}, userPayload) => {
  fetch(`/users`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json, text/plain, */*',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(userPayload)
  })
  .then(response => response.json())
  .then(json => commit(types.REGISTER, json))
}

export const addPost = ({commit}, postsPayload) => {
  console.log('Add post sent');
  console.log(this);
  fetch(`/create`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json, text/plain, */*',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(postsPayload)
  })
    .then(response => response.json())
    .then(json => commit(types.ADD_POST, json)) 
}

/*Might need to change get tree to a post*/
/*
export const getTree = ({commit}) => {
  axios.get('/tree')
  .then(function (response) {
    console.log('Retrieved relations tree: ', response.data);
    commit(types.GET_TREE, response.data)
  })
  .catch(function (error) {
    console.log(error);
  });
}
*/

export const getTree = ({commit}, postsPayload) => {
  fetch(`/tree`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json, text/plain, */*',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(postsPayload)
  })
    .then(response => response.json())
    .then(json => commit(types.GET_TREE, json)) 
}