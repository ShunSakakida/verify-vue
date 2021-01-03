<template>
    <div>
        <!-- https://yama-itech.net/vue2-timepicker -->
        <div class="my-time-picker">
            <vue-timepicker
                class="fa"
                advanced-keyboard
                manual-input 
                close-on-complete
                hour-label="時"
                minute-label="分"
                minute-interval="15"
                :placeholder="time"
                v-model="getTime"
            ></vue-timepicker>
            <br>
            <button @click="showlog">ログ</button>
            <br>
            <button @click="add">足し算してみる</button>
        </div>
    </div>
</template>
<script>
import VueTimepicker from 'vue2-timepicker'
import 'vue2-timepicker/dist/VueTimepicker.css'

 export default {
     data() {
         return {
             time:`\uf017 10:00`,// 時計
             getTime:null,
         }
     },
     methods:{
         showlog:function(){
             console.log(this.getTime);
             console.log(this.getTime.HH);
         },
         add:function(){
             console.log(this.getTime.HH);
             console.log(Number(this.getTime.HH)*60+Number(this.getTime.mm));
             
             let min=Number(this.getTime.HH)*60+Number(this.getTime.mm)+360;
             console.log(Math.floor(min/(60*24)));
             
             
         },

     },
     computed:{
     },
     mounted:{
     },
     components:{
         'vue-timepicker': VueTimepicker,
     }

 }

</script>
<style scoped>
    .my-time-picker >>> .vue__time-picker .dropdown ul li:not([disabled]).active,
    .my-time-picker >>> .vue__time-picker .dropdown ul li:not([disabled]).active:focus,
    .my-time-picker >>> .vue__time-picker .dropdown ul li:not([disabled]).active:hover {
        background: #999;
    }
</style>