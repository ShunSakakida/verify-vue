<template>
    <div>
        <h2>LocalStrage</h2>
        <div class="local1">
            <h3>途中保存1</h3>
            
        </div>
        <hr>
        <div class="local2">
            <h3>途中保存2</h3>
        </div>
        <hr>
        <div class="formtest">
            <h3>途中入力のフォームテスト</h3>
            <textarea v-model="context" 
                name="" id="" cols="30" rows="10" 
                style="border:solid 1px black"></textarea>

            <div @click="store" style="border:solid 1px black; color:red">保存</div>
            <div @click="commit" style="border:solid 1px black; color:red">確定</div>
            <div>
                <p>確定内容</p>
                <p>{{commiting}}</p>
            </div>
            <hr>
        </div>
    </div>
</template>
<script>
export default {
    methods:{
        setLocal1:function(){
            localStorage.setItem('testKey1','testVal1');
        },
        //  途中保存
        store(){
            localStorage.setItem(this.key,this.context);
        },
        commit(){
            this.commiting=this.context;
            localStorage.removeItem(this.key);   
        }
     },
     mounted:function(){
         // テスト実行
        this.setLocal1();
        // 途中入力内容取得
        this.context=localStorage.getItem(this.key);
     },
     data() {
         return {
             context:'',
             key:'textareanokey',
             commiting:'まだ確定してない',
         }
     },
 }

</script>