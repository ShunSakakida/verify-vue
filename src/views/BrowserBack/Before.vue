<template>
    <div>
        <h1>ブラウザバックの制御：強制的に「GoogleMapのピン立て」に飛ばす</h1>
        <p>この画面はBeforeです</p>
        <button class="btn" @click="after">AfterへGO</button>
    </div>
</template>
<script>
export default {
    mounted:function(){
        console.log('mounted');
        
    },
    methods:{
        after:function() {
            this.$router.push({ name: 'After' })
        }
    },
    // コンポーネント単位のナビゲーションガード：moutedよりも早い
    beforeRouteEnter(to, from,next) {
        

        let From=from.name;
        
        // 遷移元がAfterの場合はGoogleMapピンに飛ばす
        if(From=='After'){
            next({ name: 'Gmappin' }); // GoogleMapピン立てに
        }
        // 上記以外は通常通り本画面に遷移
        next();
    }
    
     
 }

</script>