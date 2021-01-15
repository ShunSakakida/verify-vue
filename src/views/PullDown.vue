<template>
    <div>
        <select class="aaa" v-model="num">
            <option  v-for="n in nums" :key="n">{{n}}</option>
        </select>
        <button @click="showLog">ログ</button>
    </div>
</template>
<script>
export default {
     methods:{
         showLog:function(){
             console.log(this.num);
         }
     },
     computed:{
     },
     mounted:{

     },
     data() {
        return {
             num:null,
             nums: [1,2,3],
        }
     },
 }

</script>
<style  scoped>
.aaa{
    width: 100px;
    border: 1px solid;
}

</style>