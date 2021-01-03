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
    <hr>
    <router-view />
    <!-- <v-app-bar>
      <div class="d-flex align-center">
        <v-img/>
        <v-img/>
      </div>
      <v-spacer></v-spacer>
      <v-btn>
        <span class="mr-2">Latest Release</span>
        <v-icon></v-icon>
      </v-btn>
    </v-app-bar>
    <v-main></v-main> -->
    <!-- Font Awesome -->
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
