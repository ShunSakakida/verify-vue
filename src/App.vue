<template>
  <v-app>
      <router-link to="/slick">Slick</router-link>
      <router-link to="/select">Select</router-link>
      <router-link to="/timePicker">TimePicker</router-link>
      <router-link to="/page">Page</router-link>
      <router-link to="/page-slick">Page ✕ Slick</router-link>
      <router-link to="/component">Component</router-link>
      <router-link to="/gmappin">GoogleMapのピン立て</router-link>
      <router-link to="/payjp">PayJp</router-link>
      <router-link to="/pulldown">PullDown</router-link>
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
