import babelpolyfill from 'babel-polyfill'
import Vue from 'vue'
import ElementUI from 'element-ui'
import VueRouter from 'vue-router'
import App from './App.vue'

import 'element-ui/lib/theme-chalk/index.css'
import 'element-ui/lib/theme-chalk/display.css'
import 'font-awesome/css/font-awesome.min.css'

import routes from './router/router'


Vue.use(ElementUI);
Vue.use(VueRouter);

const router = new VueRouter({
    routes,
});


new Vue({
    el: '#app',
    render: h => h(App),
    router,

});