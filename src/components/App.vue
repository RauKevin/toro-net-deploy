<template >
  <div id="app" >

       <br>
       <br>
       <br>

        <div class="container ">

                 <!-- <hr>
                <router-link to="/">Home</router-link>
                <a v-if="!this.$store.state.user.displayName" href="/register" @click="register">Register</a>

                <router-link v-else to="/login">Login</router-link>
                <h1>{{ title }}</h1>
                <hr /> -->
                <div class="row" v-if="this.$store.state.user.displayName">
                  <!-- <a v-if="this.$store.state.user.displayName" href="/logout" @click="logout"><button class="btn btn-danger" type="button" name="button">Logout</button></a> -->
                  <Navbar-loggedin>  </Navbar-loggedin>
                </div>
              <div class="">
                <br>
                <hr>
                <br>
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
      title: 'Toro--Net',

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
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 30px;
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
}
</style>
