<template>
<div >
    <br>
    <div class="form-group">
        <input type="text" class="form-control" id="title" placeholder="Title" v-model="title" >
    </div>
    <div class="form-group">
        <textarea class="form-control" id="body" rows="this.textareaHeight" style="overflow:hidden"  placeholder="Write your thoughts here..."  v-model="body" >
        </textarea>
    </div>
    <button class="btn btn-primary" @click="addPost()">Post!</button>
    <hr>
</div>
</template>

<script>
export default {
  data() {
    return {
      title: '',
      body: ''
    };
  },  
  methods: {
    addPost(){
      // alert("No posting for you!");
      console.log("title: "+this.title + " , body: "+this.body);
      const postcard = {
        user: this.$store.state.user.displayName,
        title: this.title,
        body: this.body
      };
      console.log(postcard);
      this.$store.dispatch('addPost', postcard);

      //displays post once it is submitted
      this.$store.dispatch('getPosts')

      //clear post text area
      this.title = '';
      this.body = '';
      
    }, 
    expandTextArea()
    {
        document.getElementById('body').addEventListener('keyup', function() {
        this.style.overflow = 'hidden';
        this.style.height = 0;
        this.style.height = this.scrollHeight + 'px';
    }, false);
    }
  },
  mounted() {
    this.expandTextArea();
  }
}
</script>

<style>

textarea {
  margin:0px 0px;
  padding:5px;
  min-height:16px;
  line-height:16px;
  display:block;
  margin:0px auto;    
}
</style>