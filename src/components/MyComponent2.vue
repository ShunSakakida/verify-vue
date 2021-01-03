<template>
  <v-container>
      名前  <input type="text" v-model="obj.name" class="input" @change="sendObj">
      <br>
      年齢  <input type="text" v-model="obj.age" class="input" @change="sendObj">
      <br>
      <br>
      <button @click="showLogOnParent" class="btn">コンポーネント2から親コンポーネントのイベントを発火して確認</button>
  </v-container>
</template>

<script>


export default {
     data() {
         return {
             obj:{
                 name:null,
                 age:null,
             },
         }
     },
     methods:{
         showLog:function(){
             console.log(this.obj.name);
             console.log(this.obj.age);
         },         
         showLogOnParent:function(){
             this.$emit('show-log-by-emit');
         },
         sendObj:function(){
             // 親コンポーネントのイベント発火ついでにデータを送る
             console.log('コンポーネント２からemitする(データを送る)');
             this.$emit('send-obj',this.obj);
         },
     },
     computed:{
     },
     mounted:{

     }

 }

</script>
<style scoped>
.input{
    border: solid 1px;
}
.btn{
    border: solid 1px;
    background-color: gray;
}
</style>