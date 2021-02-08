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
    {
        path: '/pulldown',
        name: 'Pulldown',
        component: () =>
            import ('../views/PullDown.vue'),
    },
    {
        path: '/css',
        name: 'CSS',
        component: () =>
            import ('../views/CSS.vue'),
    },
    {
        path: '/bb/before',
        name: 'Before',
        component: () =>
            import ('../views/BrowserBack/Before.vue'),
    },
    {
        path: '/bb/after',
        name: 'After',
        component: () =>
            import ('../views/BrowserBack/After.vue'),
    },
    {
        path: '/validation',
        name: 'Validation',
        component: () =>
            import ('../views/Validation.vue'),
    },
    {
        path: '/path-param/:id',
        name: 'pathParam',
        component: () =>
            import ('../views/PathParam.vue'),
    },
    {
        path: '/uuid',
        name: 'uuid',
        component: () =>
            import ('../views/UUID.vue'),
    },
    {
        path: '/fadein',
        name: 'fadein',
        component: () =>
            import ('../views/FadeIn.vue'),
    },
    {
        path: '/stripe',
        name: 'stripe',
        component: () =>
            import ('../views/Stripe/Stripe.vue'),
    },
    {
        path: '/stripe2',
        name: 'stripe2',
        component: () =>
            import ('../views/Stripe/Stripe2.vue'),
    },
    {
        path: '/stripe3',
        name: 'stripe3',
        component: () =>
            import ('../views/Stripe/Stripe3.vue'),
    },
    {
        path: '/stripe4',
        name: 'stripe4',
        component: () =>
            import ('../views/Stripe/Stripe4.vue'),
    },
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router