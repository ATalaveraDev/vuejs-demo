import Vue from 'vue';
import App from './App.vue';
import VueResource from 'vue-resource';

import DemoList from './components/List.vue';
import DemoForm from './components/Form.vue';

Vue.use(VueResource);

Vue.component('demo-list', DemoList);
Vue.component('demo-form', DemoForm);

new Vue({
  el: '#app',
  render: h => h(App)
});
