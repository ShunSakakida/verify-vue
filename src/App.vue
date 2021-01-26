<template>
  <v-app>
    <div class="container">
      <router-link class="rl" to="/slick">Slick</router-link>
      <router-link class="rl" to="/select">Select</router-link>
      <router-link class="rl" to="/timePicker">TimePicker</router-link>
      <router-link class="rl" to="/page">Page</router-link>
      <router-link class="rl" to="/page-slick">Page ✕ Slick</router-link>
      <router-link class="rl" to="/component">Component</router-link>
      <router-link class="rl" to="/gmappin">GoogleMapのピン立て</router-link>
      <router-link class="rl" to="/payjp">PayJp</router-link>
      <router-link class="rl" to="/pulldown">PullDown</router-link>
      <router-link class="rl" to="/css">CSS</router-link>
      <router-link class="rl" to="/bb/before">ブラウザバック</router-link>
      <router-link class="rl" to="/validation">バリデーション</router-link>
    </div>
    <hr>
    <router-view />
    <link href="https://use.fontawesome.com/releases/v5.6.1/css/all.css" rel="stylesheet">

  </v-app>
  
</template>

<script>


export default {
  name: 'App',

  components: {
    
  },

  data: () => ({
    //
  }),
};
</script>
<style scoped>
.rl{
  width: 25%
}

.container{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 0 10px;

  
}


</style>
<style>
@import "./assets/css/style.css";
</style>
