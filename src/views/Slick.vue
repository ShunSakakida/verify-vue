<template>
  <div >
    <div >
      <!-- https://www.tec-engineer.com/%E3%82%B5%E3%83%B3%E3%83%97%E3%83%AB%E7%94%BB%E9%9D%A2%E3%81%82%E3%82%8A-vue-js%E3%81%AEvue-slick%E3%83%97%E3%83%A9%E3%82%B0%E3%82%A4%E3%83%B3%E3%81%A7%E3%82%AB%E3%83%AB%E3%83%BC%E3%82%BB%E3%83%AB/ -->
      <p>slick デフォルト ↓</p>
      <slick ref="slick" class="slick-outer">
        <div><img src="@/assets/東京.jpeg" class="slick-img"></div>
        <div><img src="@/assets/大阪.jpeg" class="slick-img"></div>
        <div><img src="@/assets/神奈川.jpeg" class="slick-img"></div>
      </slick>

      <p>slick オプション指定 ↓</p>
        <slick ref="slick" :options="slickOptions" class="slick-outer">
          <div><img src="@/assets/東京.jpeg" class="slick-img"></div>
          <div><img src="@/assets/大阪.jpeg" class="slick-img"></div>
          <div><img src="@/assets/神奈川.jpeg" class="slick-img"></div>
        </slick>

      <p>slick 選択式</p>
      <input type="file" @change="addPicture1">
      <input type="file" @change="addPicture2">
      <input type="file" @change="addPicture3">
      <p>選択式 シンプル</p>
      <slick ref="slick" class="slick-outer">
        <div v-if="pic1.show"><img :src="pic1" class="slick-img"></div>
        <div v-if="pic2.show"><img :src="pic2" class="slick-img"></div>
        <div v-if="pic3.show"><img :src="pic3" class="slick-img"></div>
      </slick>

      <p>選択式 for文</p>
      <slick ref="slick" class="slick-outer">
        <!-- <div v-for="pic in pics" :key="pic">
          <img :src="pic" class="slick-img">
        </div> -->
        <!-- <div v-for="pic in pics" :key="pic">
          <img src="@/assets/東京.jpeg" class="slick-img">
        </div>         -->
        <!-- <div v-for="pic in pics" :key="pic">
          <img src="@/assets/神奈川.jpeg" class="slick-img">
        </div> -->
        <!-- <img :src="pic" class="slick-img" v-for="pic in pics" :key="pic"> -->
      </slick>


    </div>
    <router-view/>
  </div>
</template>
<script>
import Slick from 'vue-slick'
import '../../node_modules/slick-carousel/slick/slick.css'

 export default {
    data() {
      return {
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
            autoplaySpeed:3000,// 自動再生で切り替え時間
            
          },
          pic1:{
            img:null,
            show:false,
          },
          pic2:{
            img:null,
            show:false,
          },
          pic3:{
            img:null,
            show:false,
          },
          pics:[
            // require('./assets/東京.jpeg'),
            // require('./assets/神奈川.jpeg'),
          ],
      }
    },
    methods:{
      toAbout:function(){
        this.$router.push({name: 'About', query: {message: "テスト"}})
      },
      addPicture1:function(){
        event.preventDefault();
        let file=event.target.files[0];
        this.pic1.img=window.URL.createObjectURL(file);
        this.pic1.show=true;
        this.pics.push(this.pic1.img);
      },
      addPicture2:function(){
        event.preventDefault();
        let file=event.target.files[0];
        this.pic2.img=window.URL.createObjectURL(file);
        this.pic2.show=true;
        this.pics.push(this.pic2.img);
      },
      addPicture3:function(){
        event.preventDefault();
        let file=event.target.files[0];
        this.pic3.img=window.URL.createObjectURL(file);
        this.pic3.show=true;
        this.pics.push(this.pic3.img);
      },
    },
    components: {
      Slick
    },  
}
</script>

