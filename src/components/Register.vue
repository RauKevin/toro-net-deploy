<template >
    <div class="container col-sm-4 align-items-center ">

      <!-- navbar loaded -->
        <nav-bar> </nav-bar>

      <form action="/users" method="post" >
            <div class="">
               <h2>Toro Net!</h2>
            </div>
            <hr>

             <!-- display Nme -->
            <div class="form-group">
              <!-- <label for="name" class="col-sm-2 control-label">Your Name</label> -->
                  <div class="cols-sm-10">
                          <div class="input-group">
                            <span class="input-group-addon"><i class="fa fa-user fa" aria-hidden="true"></i></span>
                            <input type="text" class="form-control" name="displayName"  placeholder="Your Name" v-model="displayName"/>
                          </div>
                  </div>
            </div>

            <div class="form-group">
              <!-- <input type="text" class="form-control" name="username" placeholder="Username" v-model="username"> -->
                  <!-- <label for="username" class="col-sm-2 control-label">Username</label> -->
                    <div class="cols-sm-10">
                        <div class="input-group">
                          <span class="input-group-addon"><i class="fa fa-users fa" aria-hidden="true"></i></span>
                          <!-- <input type="text" class="form-control" name="username" id="username"  placeholder="Enter your Username"/> -->
                          <input type="text" class="form-control" name="username" placeholder="Username" v-model="username">

                        </div>
                    </div>

            </div>

            <!-- your email -->
            <div class="form-group">
                 <!-- <label for="email" class="col-sm-2 control-label">Your Email</label> -->
                 <div class="cols-sm-10">
                       <div class="input-group">
                           <span class="input-group-addon"><i class="fa fa-envelope fa" aria-hidden="true"></i></span>
                           <!-- <input type="text" class="form-control" name="email" id="email"  placeholder="Enter your Email"/> -->
                           <input type="text" v-validate="email" data-rules="required|email" class="form-control" name="email" placeholder="Email" v-model="email">
                       </div>
                 </div>
            </div>

          <div class="form-group">
            <!-- <input type="password" class="form-control" name="password" placeholder="Password" v-model="password"> -->
            <!-- <label for="password" class="col-sm-2 control-label">Password</label> -->
            <div class="cols-sm-10">
              <div class="input-group">
                <span class="input-group-addon"><i class="fa fa-lock fa-lg" aria-hidden="true"></i></span>
                <input type="password" class="form-control" name="password" placeholder="Password" v-model="password">
              </div>
            </div>

          </div>

          <div class="form-group">
            <!-- <input type="password" class="form-control" name="passwordConf" placeholder="Confirm password" v-model="passwordConf"> -->
            <!-- <label for="confirm" class="col-sm-2 control-label">Confirm Password</label> -->
                  <div class="cols-sm-10">
                        <div class="input-group">
                          <span class="input-group-addon"><i class="fa fa-lock fa-lg" aria-hidden="true"></i></span>
                          <input type="password" class="form-control" name="passwordConf" placeholder="Confirm password" v-model="passwordConf">
                        </div>
                  </div>
          </div>



          <button class="btn btn-success" type="submit" >Register</button>
          

      </form>
    </div>
<!--
    <div class="container">
    <div class="row">
          <div class="panel-heading">
                   <div class="panel-title text-center">
                      <h1 class="title">TORO Net</h1>
                      <hr />
                    </div>
           </div>
            <hr>
            <br>
      <div class="align-item-center">
        <form class="form-horizontal" method="post" action="#">

            <div class="form-group">
              <label for="name" class="cols-sm-2 control-label">Your Name</label>
              <div class="cols-sm-10">
                <div class="input-group">
                  <span class="input-group-addon"><i class="fa fa-user fa" aria-hidden="true"></i></span>
                  <input type="text" class="form-control" name="name" id="name"  placeholder="Enter your Name"/>
                </div>
              </div>
            </div>

          <div class="form-group">
            <label for="email" class="cols-sm-2 control-label">Your Email</label>
            <div class="cols-sm-10">
              <div class="input-group">
                <span class="input-group-addon"><i class="fa fa-envelope fa" aria-hidden="true"></i></span>
                <input type="text" class="form-control" name="email" id="email"  placeholder="Enter your Email"/>
              </div>
            </div>
          </div>

          <div class="form-group">
            <label for="username" class="cols-sm-2 control-label">Username</label>
            <div class="cols-sm-10">
              <div class="input-group">
                <span class="input-group-addon"><i class="fa fa-users fa" aria-hidden="true"></i></span>
                <input type="text" class="form-control" name="username" id="username"  placeholder="Enter your Username"/>
              </div>
            </div>
          </div>

          <div class="form-group">
            <label for="password" class="cols-sm-2 control-label">Password</label>
            <div class="cols-sm-10">
              <div class="input-group">
                <span class="input-group-addon"><i class="fa fa-lock fa-lg" aria-hidden="true"></i></span>
                <input type="password" class="form-control" name="password" id="password"  placeholder="Enter your Password"/>
              </div>
            </div>
          </div>

          <div class="form-group">
            <label for="confirm" class="cols-sm-2 control-label">Confirm Password</label>
            <div class="cols-sm-10">
              <div class="input-group">
                <span class="input-group-addon"><i class="fa fa-lock fa-lg" aria-hidden="true"></i></span>
                <input type="password" class="form-control" name="confirm" id="confirm"  placeholder="Confirm your Password"/>
              </div>
            </div>
          </div>

          <div class="form-group ">
            <button type="button" class="btn btn-primary btn-lg btn-block login-button">Register</button>
          </div>

        </form>
      </div>
    </div>
  </div> -->

</template>

<style>
.container form{

    /*witdth:10px;*/



}



</style>

<script>
export default {
  name: 'Register',
  data() {
    return {
      displayName: '',
      username: '',
      email: '',
      password: '',
      passwordConf: ''
    }
  },
  methods: {
    registerUser() {
      const newUser = {
        displayName: this.displayName,
        username: this.username,
        email: this.email,
        password: this.password,
        passwordConf: this.passwordConf,
      }
      this.$store.dispatch('register', newUser)
    }
  }
}
</script>
