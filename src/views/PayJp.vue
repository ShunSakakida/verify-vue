<template>
    <div>
        <!-- テスト公開鍵 -->
        <PayjpCheckout
            api-key="pk_test_223acfaf29cfb280cdafedde"
            text="ポップアップを開く"
            submit-text="テストカードで支払い"
            name-placeholder="JOHN DOE"
            v-on:created="onTokenCreated"
            v-on:failed="onTokenFailed">
        </PayjpCheckout>
        <div>
            <p>token={{token}}</p>
        </div>

        <button @click="charge" class="btn">売上を作る</button>

        <div ref="payjpArea"></div>
    </div>
</template>
<script>
import PayjpCheckout from 'vue-payjp-checkout';
import axios from 'axios';

export default {
    // フロント側：公開鍵
    // https://titanwolf.org/Network/Articles/Article?AID=68d45874-1d28-4a27-952f-1dedf0cf6fe2#gsc.tab=0
    // https://qiita.com/hirotakasasaki/items/794c920016ac7c33da74
    // https://qiita.com/ma7ma7pipipi/items/de97e11bea5ba044f896
    // https://github.com/ngs/vue-payjp-checkout
    // npm install --save vue-payjp-checkout

    // サーバ側：秘密鍵
    // https://pay.jp/docs/api/#%E6%94%AF%E6%89%95%E3%81%84%E3%82%92%E4%BD%9C%E6%88%90

    components:{
        PayjpCheckout
    },
    methods:{
        onTokenCreated:function(res){
            console.log(res.id);
            this.token=res.id;
        },
        onTokenFailed:function(){

        },
        charge:function(){
            let url='http://localhost:8080/payjp?token='+this.token;

            axios.get(url).then(()=>{
                console.log('一応終わった');
            });
        }
    },
    computed:{
    },
    mounted:{
    },
    data() {
         return {
             token:null,
         }
    },

 }

</script>
<style scoped>
@import "../assets/css/style_base.css";
</style>