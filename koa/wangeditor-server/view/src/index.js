import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './components/index/index.vue';
import './style/reset.less';

Vue.use(ElementUI);
new Vue({
    el: '#app',
    render: function (h) {
        return h(App);
    }
});