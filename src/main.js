import Vue from 'vue'
import Vuex from 'vuex'
import VueRouter from 'vue-router'
import store from './store'
import VueResource from 'vue-resource'

Vue.use(VueResource)

Vue.use(VueRouter)
import App from './components/App.vue'
import Home from './components/Home.vue'
import Counter from './components/Counter.vue'
import Login from './components/Login.vue'
import Register from './components/Register.vue'
import Navbar from './components/NavBar.vue'
import HpContent from './components/HPContent.vue'
import Footer from './components/Footer.vue'
import Navbarloggedin from './components/NavBarLoggedin.vue'


Vue.component('nav-bar', Navbar);
Vue.component('hp-content', HpContent);
Vue.component('footer-area', Footer);
Vue.component('Navbar-loggedin', Navbarloggedin);



const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/', component: Home },
    { path: '/counter', component: Counter },
    { path: '/login', component: Login },
    { path: '/register', component: Register }
  ]
})

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
