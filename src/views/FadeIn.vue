<template>
    <div>
        <h1>フェードイン</h1>
        <hr>
        <button class="btn" @click="fadein">フェードインさせるぜ</button><br>
        <button class="btn" @click="fadeout">フェードアウトさせるぜ</button><br>
        <transition class="fadein">
            <div class="fadein__bg" v-if="show">
                <div class="fadein__context">
                    <p>コンテキスト</p>
                </div>
            </div>
        </transition>
    </div>
</template>
<script>
export default {
     methods:{
        fadein:function(){
            this.show=true;
        },
        fadeout:function(){
            this.show=false;
        },

     },
     computed:{
     },
     mounted:{

     },
     data() {
         return {
             show:false,
         }
     },
 }

</script>