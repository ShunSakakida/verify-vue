import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify';
import * as VueGoogleMaps from 'vue2-google-maps';

Vue.use(VueGoogleMaps, {
    load: {
        // API キー local
        key: 'AIzaSyDCRb2RKy_QEXJtY82Vk4OHQ5enHE4CRbg',
        libraries: 'places',
        region: 'JP',
        language: 'ja'
    }
})
Vue.config.productionTip = false

new Vue({
    router,
    vuetify,
    render: h => h(App)
}).$mount('#app')