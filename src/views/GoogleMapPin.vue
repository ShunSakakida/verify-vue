<template>
    <div>        
        
        <!-- <input type="text" v-model="address" @change=getGeometry> -->
        <button @click="showLog"></button>

        <input type="text" v-model="address" style="border:solid 1px;">
        <button @click="getGeo">住所取得</button>
    <GmapMap
      :center="center"
      :zoom="15"
      map-type-id="terrain"
      style="width: 500px; height: 300px"
    >
      <GmapMarker
        :position="center"
        :clickable="true"
        :draggable="true"   
      />
      <!-- <GmapMarker
        :key="index"
        v-for="(m, index) in markers"
        :position="m.position"
        :clickable="true"
        :draggable="true"
        @click="center=m.position"
      /> -->
    </GmapMap>
    </div>
</template>
<script>
import axios from 'axios';

/***
 * https://qiita.com/yoshii0110/items/c49e0abf0396f6157a6b
 * https://github.com/PDERAS/vue2-geocoder#readme
 * 住所 → 経度・緯度取得
 * 
 * https://teratail.com/questions/159154
 * → Gocordingを有効化すること
 * https://jongz.hatenablog.com/entry/2019/12/02/035347
 * https://note.com/cool_ryo576/n/n3fcf987a023a
 * http://salary.katsulabo.com/vue2-google-maps/
 * https://teratail.com/questions/251264
 * https://qiita.com/diggy-mo/items/fb02a69c92138cf2d4a4
 * 
 */

export default {
     data() {
         return {
            center:{
                // 東京
                lat:35.68123620000001, // 緯度
                lng:139.7671248,// 経度
            },
            address:null,// 住所(入力)
            formatted_address:null,// 住所(正式)

            geocoder:null,
            url:'https://maps.googleapis.com/maps/api/geocode/json?address=',
            comp:'&components=country:JP',
            key:'&key=AIzaSyC8pNCKYai-5ASaH2bqOzgM9D7TSkGfGMM',
         }
     },
     methods:{
         getGeometry:function(){
            // this.geocoder.geocode(
            //     {'address': this.address},
            //     (results, status) =>{
            //         if(status === google.maps.GeocoderStatus.OK) {
            //                 this.lat = results[0].geometry.location.lat();// 緯度を取得
            //                 this.lng = results[0].geometry.location.lng();// 経度を取得
            //         }
            //     }
            // )
         },
         getGeo:function(){
             let url=this.url+this.address+this.comp+this.key;
             console.log(url);
             axios.get(url)
                .then(res =>{
                    console.log(res);
                    let data=res.data.results[0];
                    let location=data.geometry.location;
                    this.center.lat = location.lat;// 緯度
                    this.center.lng = location.lng;// 経度
                    this.formatted_address=data.formatted_address;// 住所(正式)
                    console.log(this.center.lat);
                    console.log(this.center.lng);
                })
         },
         showLog:function(){
             console.log(this.lat);
             console.log(this.lng);
             
         }
     },
     computed:{
     },
     mounted(){
        //  this.$gmapApiPromiseLazy().then(() => { var bounds = new google.maps.LatLngBounds() /* etc */ })
     }

 }

</script>