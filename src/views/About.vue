<template>
  <div class="about">
    <h1>This is an about page</h1>
    <button @click="log">ログ男</button>
    <p>{{obj}}</p>
    <p>見えない</p>
    <!-- <p>{{obj.message}}</p> -->
  </div>
</template>

<script>
 export default {
    props: ['obj'],
    data() {
      return {
    
      }
    },
    methods:{
      log:function(){
        console.log(this.$route.query.obj);
      }
    }
  }
</script>