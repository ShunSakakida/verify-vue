<template>
    <div>
        <v-select
             v-model="selected"
             label="榊田" 
             :items="items"
             class="select-v1"
        ></v-select>
        <v-select
             class="fa select-v2"
             v-model="selected2"
             :label="fa.num" 
             :items="items2"
        ></v-select>
        <v-select
             class="fa select-v2"
             v-model="selected2"
             :label="fa.num" 
             :items="items2"
             
        ></v-select>        
        
    </div>
</template>
<script>
// const maxAge = 23; //表示したい数字より+1で設定。
const ageRange = [...Array(5)].map((_, i) => i);
export default {
     data() {
         return {
             items: [
                 'foo',
                 'bar',
                 'baz'
             ],
             selected: '',
             items2: ageRange,
             selected2: '',
             fa:{// FontAwesome
                map:`\uf3c5 現在地周辺`,
                date:`\uf073 11月11日(水)`,// カレンダー
                time:`\uf017 10:00`,// 時計
                num:`\uf007 1名`,//ユーザ
            },
        }
     },
     methods:{
     },
     computed:{
     },
     mounted:{

     }

 }

</script>

<style scoped>
@import "../assets/css/style_select.css";
</style>
