<template>
    <div>
        <h1>バリデーション</h1>
        <br>
        <span>インプット</span>
        <input type="text" class="input" v-model="input">
        <p class="validation-text">{{error.in}}</p>
        
        <span>数値</span>
        <input type="text" class="input" v-model="num">
        <p class="validation-text">{{error.num}}</p>




        <br>
        <br>
        <button class="btn" @click="check">ボタン</button>
        

    </div>
</template>
<script>
export default {
     methods:{
        check:function(){
            if(this.input.length <10){
                this.error.in="10文字以上を入力してください"
            }
            if(!Number.isNaN(this.num)){
                this.error.num="数値で入力してください"
            }

        }
     },
     computed:{
     },
     mounted:{

     },
    //  watch:{
    //     input:function(newval,oldval){
    //         console.log(newval);
    //         console(oldval);
    //     }
    //  },
     data() {
         return {
             input:'',
             num:null,
             error:{
                 in:'',
                 num:'',
             },
         }
     },
 }

</script>