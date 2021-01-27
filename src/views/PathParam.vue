<template>
    <div>
        <!-- 
            パスParamだけで切り替えた場合は、ライフサイクルフックが呼ばれない
            同じURLだから！
            Udemy 190
         -->
        <h1>パスParam</h1>
        <hr>
        <p>{{$route.params.id}}</p>
        <button class="btn" @click="showLog">ログを見る</button>
    </div>
</template>
<script>
export default {
     methods:{
         showLog:function(){
             console.log(this.$route.params.id);
         }
     },
     computed:{
     },
     mounted:{

     },
     watch:{
         $route(to,from){
             console.log('$routeが変わった');
             console.log(to);
             console.log(from);
         }
     },
     data() {
         return {
         }
     },
 }

</script>