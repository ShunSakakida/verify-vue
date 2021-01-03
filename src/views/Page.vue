<template>
    <div>
        <!-- <p>通常</p>
        <v-content>
            <div class="text-center">
                <v-list>
                    <v-list-item v-for="list in tutorial.displayLists" :key="list.index">
                        <v-list-item-content>
                            <v-list-item-title>{{ list.title }}</v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                </v-list>
                <v-pagination
                    v-model="tutorial.page"
                    :length="6"
                    @input = "pageChange"
                ></v-pagination>
            </div>
        </v-content> -->
        <hr>
        <p>API</p>
        <v-content>
            <div class="text-center">
                <v-list>
                    <v-list-item v-for="list in mock.dataList" :key="list.index">
                        <v-list-item-content>
                            <v-list-item-title>{{ list.name }},{{ list.age }}</v-list-item-title>
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
// import Paginate from 'vuejs-paginate'
// https://reffect.co.jp/vue/vuetify-simple-pagination
export default {
     data() {
         return {
             tutorial:{
                 page: 1,
                 lists: [],
                 displayLists: [],
                 pageSize: 10,
             },
             mock:{
                 page: 1,
                 dataList:[],
                 pageSize: 10,
                 length:6,
                 

             },
         }
     },
     methods:{
        pageChange: function(pageNumber){// pageNumber：クリックしたページ番号を取得できる
            this.tutorial.displayLists = 
                this.tutorial.lists.slice(this.tutorial.pageSize*(pageNumber -1), this.tutorial.pageSize*(pageNumber));
        },
        getPage:function(pageNumber){
            let pNum=pageNumber-1
            let url=`http://localhost:8080/mock/page?size=${this.mock.size}&page=${pNum}`;
            axios.post(url)
                .then(res =>{
                    let manPage=res.data.manPage;
                    this.mock.dataList=manPage.content;
                    this.mock.length=manPage.totalPages;
                });
        }
     },
     computed:{
     },
     mounted:function(){
        this.lists = new Array(99).fill().map((v,i)=> {
            return { id : i,title : 'Title' + i };
        });
        this.displayLists = this.lists.slice(0,this.pageSize);

        let url=`http://localhost:8080/mock/page?size=${this.mock.size}&page=0`;
            axios.post(url)
                .then(res =>{
                    let manPage=res.data.manPage;
                    this.mock.dataList=manPage.content;
                    this.mock.length=manPage.totalPages;
                });
     }

 }

</script>
