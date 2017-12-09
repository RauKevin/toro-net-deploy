<template >
  <div id="app" >
       <br>

        <div class="container ">
          <h1>{{ title }}</h1>
          <div v-if="!this.$store.state.user.displayName">
          <hr>
          <router-link to="/">Home</router-link>
          <!--<a v-if="!this.$store.state.user.displayName" href="/register" @click="register">Register</a>-->
          <router-link to="/register">Register</router-link>
          <router-link to="/login">Login</router-link>
          
          <hr />
      <!-- Insert cool photo -->
      <img src="toro.jpg" alt="Toro-Net" style="float: left;"> 
          </div>
          <div class="row" v-if="this.$store.state.user.displayName">
          <a href="/logout" @click="logout">Logout</a>
          <br>
          <hr /> 
        </div>
      
          <router-view />

        </div>


      <div class="">
        <br>
        <br>
        <br>
        <br>
      </div>



  </div>

</template>

<script>
export default {
  name: 'app',
  // data:
  // {
  //   showContent:true,
  // },
  data () {
    return {
      title: 'Toro-Net',

    }
  },
  methods: {
    logout() {
      this.$store.dispatch('logout')
    },
    hpStaus(){
      // showNav=false;
      console.log(this.$store);

    },
  },
  mounted() {
    this.$store.dispatch('getUser')
  }
}
</script>

<style>
#app {
  font-family: Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-bottom: 3%;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

a {
  color: #42b983;
  text-align: center;
}
.row {
  text-align: center;
  margin:auto;
}
.container {
  padding: 3%;
}
</style>
