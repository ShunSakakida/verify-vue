<template>
    <div>
        <h1>UUID</h1>
        <hr>



    </div>
</template>
<script>
import { uuid } from 'vue-uuid';

export default {
     methods:{
     },
     computed:{
     },
     mounted:function(){
        //  this.id=uuid.v4();
        //  console.log(this.id);
         console.log(this.$uuid.v1());
        //  console.log(this.$uuid.v2());
        //  console.log(this.$uuid.v3());
         console.log(this.$uuid.v4());
        //  console.log(this.$uuid.v5());
        console.log(uuid.v1());
        console.log(uuid.v4());
     },
     data() {
         return {
             id:null,
         }
     },
 }

</script>