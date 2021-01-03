<template>
    <div>
        <p>slickしながらページング</p>
        <v-content>
            <div class="text-center">
                <v-list>
                    <v-list-item v-for="list in mock.dataList" :key="list.index">
                        <v-list-item-content>
                            <v-list-item-title>
                                <slick ref="slick" :options="slickOptions" class="slick-outer">
                                    <div><img :src="list.main" class="slick-img"></div>
                                    <div v-if="list.sub1!=null"><img :src="list.sub1" class="slick-img"></div>
                                    <div v-if="list.sub2!=null"><img :src="list.sub2" class="slick-img"></div>
                                    <div v-if="list.sub3!=null"><img :src="list.sub3" class="slick-img"></div>
                                </slick>
                            </v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                </v-list>
                <v-pagination
                    v-model="mock.page"
                    :length="mock.length"
                    :total-visible=7
                    @input = "getPage"
                ></v-pagination>
            </div>
        </v-content>
    </div>
</template>

<script>
import axios from 'axios';
import Slick from 'vue-slick'
import '../../node_modules/slick-carousel/slick/slick.css'

export default {
    components:{
        Slick
    },
    data() {
         return {
             mock:{
                 page: 1,
                 dataList:[],
                 pageSize: 10,
                 length:6,                
             },
             slickOptions:{
                // https://stand-4u.com/web/javascript/slick.html
                arrows: true,
                prevArrow:'<div class=”prev”>PREV</div>',
                autoplay: true,
                // dots:true,
                dotsClass: 'slide-dots',
                fade:true,
                // cssEase:'ease-in',
                draggable:true,
                autoplaySpeed:1000,// 自動再生で切り替え時間
          },
         }
     },
     methods:{
        getPage:function(){
            let url=`http://localhost:8080/mock/page-pic`;
            axios.post(url)
                .then(res =>{
                    let manPage=res.data.manPage;
                    this.mock.dataList=manPage.content;
                    this.mock.length=manPage.totalPages;
                    console.log(manPage);
                });
        }
     },
     computed:{
     },
     mounted:function(){
        let url=`http://localhost:8080/mock/page-pic`;
            axios.post(url)
                .then(res =>{
                    let manPage=res.data.manPage;
                    this.mock.dataList=manPage.content;
                    this.mock.length=manPage.totalPages;
                    console.log(this.mock.dataList);
                });
     },

 }

</script>