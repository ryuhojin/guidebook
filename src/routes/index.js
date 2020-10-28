import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const routes = [
    {path: '/', name: 'MainView', component: () => import(/* webpackChunkName: "default" */ '@/views/MainView')},
    {path: '/jsp/', name: 'JSPView', component: () => import(/* webpackChunkName: "default" */ '@/views/jsp/JSPView'),
        children: [
            { path:'about', component: () => import(/* webpackChunkName: "default" */ '@/views/jsp/JSPAboutView')},
            { path:'structure', component: () => import(/* webpackChunkName: "default" */ '@/views/jsp/JSPStructureView')},
            { path:'util', component: () => import(/* webpackChunkName: "default" */ '@/views/jsp/JSPUtilView')},
            { path:'security', component: () => import(/* webpackChunkName: "default" */ '@/views/jsp/JSPSecuirtyView')}
        ]
    },
    {path: '/vue', name: 'VueView', component: () => import(/* webpackChunkName: "default" */ '@/views/MainView')},
    {path: '/angular', name: 'AngularView', component: () => import(/* webpackChunkName: "default" */ '@/views/MainView')},
]


export default new VueRouter({
    mode : 'history',
    routes
});
