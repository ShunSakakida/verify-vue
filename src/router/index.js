import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [{
        path: '/about',
        name: 'About',
        component: () =>
            import ('../views/About.vue'),
        props: true
    },
    {
        path: '/slick',
        name: 'Slick',
        component: () =>
            import ('../views/Slick.vue'),
    },
    {
        path: '/select',
        name: 'Select',
        component: () =>
            import ('../views/Select.vue'),
    },
    {
        path: '/timePicker',
        name: 'TimePicker',
        component: () =>
            import ('../views/TimePicker.vue'),
    },
    {
        path: '/page',
        name: 'Page',
        component: () =>
            import ('../views/Page.vue'),
    },
    {
        path: '/page-slick',
        name: 'PageSlick',
        component: () =>
            import ('../views/PageSlick.vue'),
    },
    {
        path: '/component',
        name: 'Component',
        component: () =>
            import ('../views/ParentView.vue'),
    },
    {
        path: '/gmappin',
        name: 'Gmappin',
        component: () =>
            import ('../views/GoogleMapPin.vue'),
    },
    {
        path: '/payjp',
        name: 'Payjp',
        component: () =>
            import ('../views/PayJp.vue'),
    },
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router