<template>
    <div>
        <PayjpCheckout
            api-key="pk_test_d4b1a4668323c8ce49ab7ec5"
            client-id="d3d774f50bb006c26bac19402f0140a7228f8522"
            text="ポップアップを開く"
            submit-text="テストカードで支払い"
            name-placeholder="JOHN DOE"
            v-on:created="onTokenCreated"
            v-on:failed="onTokenFailed">
        </PayjpCheckout>

        <div ref="payjpArea"></div>
    </div>
</template>
<script>
import PayjpCheckout from 'vue-payjp-checkout'

export default {
    // https://titanwolf.org/Network/Articles/Article?AID=68d45874-1d28-4a27-952f-1dedf0cf6fe2#gsc.tab=0
    // この記事
    // https://qiita.com/ma7ma7pipipi/items/de97e11bea5ba044f896
    // https://github.com/ngs/vue-payjp-checkout
    // npm install --save vue-payjp-checkout
    components:{
        PayjpCheckout
    },
    methods:{
        onTokenCreated:function(){
            
        },
        onTokenFailed:function(){

        },
    },
    computed:{
    },
    mounted:{
    },
    data() {
         return {
         }
    },

 }

</script>