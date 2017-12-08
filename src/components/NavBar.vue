<template>
  <div class="container">
    <!-- Navigation bar, fixed top -->
       <nav  class="navbar navbar-expand-lg navbar-inverse bg-dark  text-white fixed-top" id="hpNavbar" >
         <a class="navbar-brand" href="/">Toro-Net</a>

         <!-- responsive button -->
         <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
           <span class="navbar-toggler-icon"></span>
         </button>


               <!-- content collapses in smaller screen size -->
         <div class="collapse navbar-collapse" id="navbarSupportedContent">
           <ul class="navbar-nav mr-auto">

             <!-- home page -->
             <li class="nav-item active">
               <a class="nav-link" href="/"  ><span class="fa fa-home"></span> Home <span class="sr-only">(current)</span></a>
             </li>

             <!-- Sign in button  -->
            <li class="nav-item">
              <a class="nav-link" v-if="!this.$store.state.user.displayName" href="/register" v-on:click="showNav=false"> <span class="fa fa-user-plus"></span> Sign up </a>
              <!-- <a v-if="!this.$store.state.user.displayName" href="/register" @click="register">Register</a> -->
            </li>

              <!-- log in button  -->
             <li class="nav-item">
               <a class="nav-link" href="/login"v-on:click="showNav=false"  > <span class="fa fa-sign-in"></span> Login </a>
             </li>



           </ul>

           <!-- <form class="form-inline my-2 my-lg-0">
             <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
             <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
           </form> -->
         </div>
       </nav>
  </div>
</template>

<style scoped>
</style>



<script>
</script>
