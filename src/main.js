import Vue from 'vue';
import VueMaterial from 'vue-material';
import App from './App.vue';
import { MdField } from 'vue-material/dist/components';
import { MdCard } from 'vue-material/dist/components';
import { MdCheckbox } from 'vue-material/dist/components';
import { MdSwitch } from 'vue-material/dist/components';
import 'vue-material/dist/vue-material.min.css';
import 'vue-material/dist/theme/default-dark.css';
import 'vue-material-design-icons/styles.css';

Vue.use(VueMaterial);
Vue.use(MdField);
Vue.use(MdCard);
Vue.use(MdCheckbox);
Vue.use(MdSwitch);

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount('#app');
