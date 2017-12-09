<template>
  <div>
      <br>
      <p>Friendship with {{target}}</p>
      <div id="tree_container" ref="tree-container"></div>
  </div>
</template>
<script>
/* eslint-disable */
  export default {
    data() {
      return { 
        target: "Jesus",
        node: 'node',
        obj: [{name: this.$store.state.user.userName}],
        box_style: 'border: 2px solid rgb(104, 124, 145); border-radius: 25px; padding-left: 2px; padding-right: 2px; background: rgb(203, 225, 247); /* For browsers that do not support gradients */ background: -webkit-linear-gradient(left top, rgb(203, 225, 247), rgb(255, 255, 255)); /* For Safari 5.1 to 6.0 */ background: -o-linear-gradient(bottom right, rgb(203, 225, 247), rgb(255, 255, 255)); /* For Opera 11.1 to 12.0 */background: -moz-linear-gradient(bottom right, rgb(203, 225, 247), rgb(255, 255, 255)); /* For Firefox 3.6 to 15 */background: linear-gradient(to bottom right, rgb(203, 225, 247), rgb(255, 255, 255));font-family: Verdana;' 
      }
    },
    props:['friendpath'],
    methods: {
      init()
      { 
        //this.obj = [{name: "me <3 csc583"},{name:"Toro_User1", image: "doom_profile_pic.png"},{name:"Toro_User2"},{name:"Toro_User3"}, {name:"Jesus"}, {name:"Jose"},{name:"Maria"}];
        this.buildDivTree(this.obj);
        if(this.obj.length < 1)
        {
          console.log("The friend path object is empty");
        }
        else
        {
          this.target = this.obj[this.obj.length-1].name;
        }
      },
      GetTree(tree)
      {
        this.obj = tree;
        this.target = this.obj[this.obj.length-1].name;
        this.buildDivTree(this.obj);
      },
      buildDivTree(userObj)
      {
        console.log(this.$refs);  
        var container = document.getElementById('tree_container');
        container.innerHTML = '';
            for(let i=0; i< userObj.length; i++)
            {
            // user obj image must container url
            //container.innerHTML += "<div class='node'><img src="+userObj[i].image+"> <span>"+userObj[i].name+"</span></div>";
            container.innerHTML += "<div class='node' style='"+this.box_style+"'><p style='margin-top: 1rem; margin-bottom: 1rem; !important;'>"+userObj[i].name+"</p></div>";
            if(i<(userObj.length-1))
            {
                //container.innerHTML += "<div><span>|</span><br><span>V</span></div>"; //&#8595;
                container.innerHTML += "<div style='font-weight: bolder; font-size:30px; padding-bottom: 2%;' class='arrow'><span >&#8595;</span></div>";
            }        
        }      
      }
    },
    mounted() {
      //this.c_height = window.innerHeight ;
      this.init();
    },
    updated()
    {
      const path = this.$store.state.friendpath;
      if(path == undefined || path.length == 0)
      {
        console.log('friendpath is undefined');
        //set it equal to me, myself and I then return
        this.GetTree([{name: this.$store.state.user.userName}]);
      }
      else{
        this.GetTree(path);
      }
      // alert("tree component just updated"); //how to call updated
    }
  }
</script>
<style scoped>
#tree_container 
{
    margin: auto;
    text-align: center;        
}
.node 
{
    border: 2px solid rgb(104, 124, 145);
    padding-left: 2px;
    padding-right: 2px;
    background: rgb(203, 225, 247);; /* For browsers that do not support gradients */    
    background: -webkit-linear-gradient(left top, rgb(203, 225, 247), rgb(255, 255, 255)); /* For Safari 5.1 to 6.0 */
    background: -o-linear-gradient(bottom right, rgb(203, 225, 247), rgb(255, 255, 255)); /* For Opera 11.1 to 12.0 */
    background: -moz-linear-gradient(bottom right, rgb(203, 225, 247), rgb(255, 255, 255)); /* For Firefox 3.6 to 15 */
    background: linear-gradient(to bottom right, rgb(203, 225, 247), rgb(255, 255, 255));
    font-family: Verdana;
}
.arrow 
{
    font-weight: bolder;
    font-size:30px;
    padding-bottom: 2%;
}
p {
    margin: 0 1 1rem;
}
</style>