require('./bootstrap');

window.Vue = require('vue')


import Vue from 'vue';
import VueRouter from 'vue-router'


Vue.use(VueRouter)


let routes = [
    { path: '/test', component: require('./components/ExampleComponent.vue').default },
    { path: '/testa', component: require('./components/Test.vue').default }
]

const router = new VueRouter({
    routes: routes,
    mode: "history"
})
Vue.component('example-component', require('./components/ExampleComponent.vue').default)


const app = new Vue({
    el: '#app',
    router
})