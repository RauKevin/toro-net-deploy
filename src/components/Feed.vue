<template>
  <div class="columns">
      <h3> Add Post </h3>
      <postcard></postcard>
      <h3>My Feed</h3>

      <div v-for="post in posts">
        <div @click="getTree" class="container">
        <div class="content">
          <h5>{{post.title}}</h5>
          {{post.body}}
          </div>
          <div>
            <div class="postedBy">Posted by: {{post.user}}</div>
            <div class="postedOn"> - {{post.createdOn}}</div>
          </div>

        </div>
        <br>
      </div>  
      <p>-- END FEED --</p>
 
  </div>
</template>

<script>
import Postcard from './Postcard.vue';

export default {
  components: {
    Postcard,
  },
  data() {
    // could hold a variable that holds the post total displayed/total
  },
  methods: {
    getTree(){
      //may need to add arguments for target user and current user?
      //also need to capture the user of the selected post

      const tmp = {
        user: this.$store.state.user.displayName,
        target: 'test' //must capture username from post.
      };
      this.$store.dispatch('getTree', tmp);
    }
  },
  computed: {
    posts()
    {
      return this.$store.state.post;
    }
  },
  updated(){
    //this.$store.dispatch('getPosts')
    //console.log(this.$store.state.post);
  },
  mounted() {
     this.$store.dispatch('getPosts')
  },

};

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container {
  background-color: lightgrey;
  padding: 10px;
  margin: auto;

}
.content {
  padding-bottom: 10px;
}
.postedBy {
  text-align: left;
}
.postedOn {
  text-align: right;
}

</style>
