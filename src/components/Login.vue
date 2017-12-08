<template>
  <div class="container col-sm-4 align-items-center">

    <!-- navbar loaded -->
      <nav-bar> </nav-bar>

        <form action="/auth/local" method="post">
                      <div class="">
                         <h2>Log In!</h2>
                      </div>
                  <hr>
                  <br>
                      <div class="form-group row">
                          <span class="input-group-addon"><i class="fa fa-envelope fa" aria-hidden="true"></i></span>
                          <input class="form-control col-sm-10" type="email" name="email" placeholder="Email" v-model="email">
                      </div>

                      <div class="form-group row">
                          <span class="input-group-addon "><i class="fa fa-lock fa-lg" aria-hidden="true"></i></span>
                          <input type="password" class="form-control col-sm-10" id="password" name="password" placeholder="Password" v-model="password">
                      </div>

            <button class="btn btn-success btn-lg" @click="login" type="submit">Login</button>
        </form>

          <!-- <h4 class="mx-auto">OR<h4> -->
                      <span class="badge">OR</span>

                      <br>
          <a href="/auth/github" class="btn btn-github btn-sm">
              <i class="fa fa-github"></i> Login with Github
          </a>
  </div>
</template>

<style scoped>
.btn-github {
  border: 0;
  background: #444;
  color: white;
}
.btn-github:hover {
  background: #2B2B2B;
  color: white;
}
</style>

<script>
export default {
  name: 'Login',
  data() {
    return {
      email: '',
      password: ''
    };
  },
  methods: {
    login() {
      const user = {
        email: this.email,
        password: this.password
      }
      this.$store.dispatch('login', user)
    }
  }
}
</script>
