<template>
  <div class="container">
    <div class="container" id="contentDiv" >
      <div class="row">
          <!-- display information on home page -->
          <div class="col-sm-0 col-lg-8">
              <br>
            <div class="row offset-sm-2">
                 <h2>Connect with friends from CSUDH. </h2>
            </div>
            <br>
            <div class="row offset-sm-1">
              <p><span class="fa fa-pencil-square-o fa-3x"></span>  See posts and updates from friends.</p>
            </div>
            <br>
            <div class="row offset-sm-1">
              <p> <span class="fa fa-share-alt-square fa-3x"></span>  Share what's new in your life.</p>
            </div>
            <br>
            <div class="row offset-sm-1">
              <p><span class="fa fa-users fa-3x"></span>  Connect with more...</p>
            </div>





          </div>

        <!-- // sign up form -->
        <div class="form col-sm-12 col-lg-4">
            <h2 class="strong text-left">Join Us Now!</h2>
            <p class="text-left">Fun is on the way...</p>
            <!-- <div class="row">
                <input type="text" name="" value="" placeholder="First Name">
                <input type="text" name="" value="" placeholder="Last Name">
            </div>
            <div class="row">
                <input type="text" name="" value="" placeholder="Mobile number/Email">
            </div>
            <div class="row">
                <input type="text" name="" value="" placeholder="Password">
            </div>
            <div class="row">
                <input type="text" name="" value="" placeholder="Reenter Password">
            </div> -->


            <form class="fomr-horizontal" role="form">
                <div class="form-group row">
                  <!-- <label for="name" class="col-sm-3 control-label">Full Name</label> -->
                  <!-- first name -->
                    <div class="col-sm-6">
                      <input type="text" class="form-control" placeholder="First name">
                    </div>
                    <!-- <div class="col-sm-1">

                    </div> -->
                    <!-- last name -->
                      <div class="col-sm-6">
                        <input type="text" class="form-control" placeholder="Last name">
                      </div>
                </div>
                <!-- email/ phone number -->
                <div class="form-group row">
                      <!-- <label for="staticEmail" class="col-sm-3 col-form-label">Email/Phone</label> -->
                      <div class="col-sm-12">
                        <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Email or Phone">
                      </div>
                </div>
                <div class="form-group row">
                  <!-- <label for="inputPassword" class="col-sm-3 col-form-label">Password</label> -->
                  <div class="col-sm-12">
                    <input type="password" class="form-control" id="inputPassword" placeholder="Password">
                  </div>
                </div>
                <div class="form-group row">
                  <!-- <label for="inputPassword" class="col-sm-3 col-form-label">Password(Confirm)</label> -->
                  <div class="col-sm-12">
                    <input type="password" class="form-control" id="ConfirmPassword" placeholder="Confirm password">
                  </div>
                </div>
                <!-- Date of Birth -->
                <!-- <div class="form-control">
                  <label for="">Date of Birth</label>
                    <div class="col-sm-12">
                      <input type="date" name="birthdate" value="" class="form-control" placeholder="Date of Birth">

                    </div>
                </div> -->
                <br>
                <!-- radio buttons for genders -->
                <div class="form-group row">
                      <div class="form-check col-sm-3">
                              <label class="form-check-label">
                                <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked>
                                <strong>Female</strong>
                              </label>
                      </div>
                      <div class="form-check col-sm-3">
                            <label class="form-check-label">
                              <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option2">
                              <strong>Male</strong>
                            </label>
                        </div>

                        <div class="form-check col-sm-3">
                              <label class="form-check-label">
                                <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option2">
                                <strong>Other</strong>
                              </label>
                          </div>
                </div>

                <div class="control-group col-12">
                      <!-- Button -->
                      <div class="controls row">
                        <button class="btn btn-primary btn-block">Sign up</button>
                      </div>
               </div>
                <!-- terms -->
                <div class="col-12 text-left font-italic small">
                  By clicking Create Account, you agree to our
                  <a href="#">Terms</a>
                  and that you have read our
                  <a href="#">Data Policy</a>
                  , including our
                  <a href="#">Cookie Use</a>
                  . You may receive SMS Notifications from Toro-Net and can opt out at any time.
                </div>


            </form>



        </div>
      </div>




    </div>

  </div>
</template>

<style scoped>
</style>



<script>
</script>
