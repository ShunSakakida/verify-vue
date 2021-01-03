<template>
  <v-container>
      <p>以下、コンポーネント</p>
      <hr class="bold">
      <p>コンポーネント1</p>
      <MyComponent v-on:send-obj="obj=$event">
      </MyComponent>
      <hr>
      <p>コンポーネント2</p>
      <MyComponent2 
        v-on:send-obj="obj=$event" 
        v-on:show-log-by-emit="showFromParentByEmit">
      </MyComponent2>
      <hr class="bold">
      <br>
      <button @click="showFromParent" class="btn-red">親コンポーネントから入力を確認</button>
  </v-container>
</template>

<script>
import MyComponent from '../components/MyComponent'
import MyComponent2 from '../components/MyComponent2'

export default {
    components:{
        MyComponent,
        MyComponent2,
    },
     data() {
         return {
             obj:null,
         }
     },
     methods:{
         showFromParentByEmit:function(){
            console.log('親コンポからemitを経由して実行');
            console.log(this.obj.name);
            console.log(this.obj.age);
         },
         showFromParent:function(){
            console.log('親コンポから直接実行');
            console.log(this.obj.name);
            console.log(this.obj.age);
         },
     },
     computed:{
     },
     mounted:{

     }

 }

</script>

<style scoped>
.bold{
    border:solid 3px;
}

.btn-red{
    border: solid 1px;
    background-color: rgb(167, 82, 82);
}
</style>
