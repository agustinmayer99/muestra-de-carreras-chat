import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
import  fb  from './firebase';
import linkify from 'vue-linkify'
import GoogleAPIs from 'vue-googleapis'
 
import firebaseMessaging from './firebase'



import { ValidationObserver, ValidationProvider } from 'vee-validate';

Vue.config.productionTip = false
Vue.component('ValidationObserver', ValidationObserver);
Vue.component('ValidationProvider', ValidationProvider);
Vue.directive('linkified', linkify);
Vue.prototype.$vueEventBus = new Vue();
Vue.prototype.$messaging = firebaseMessaging


new Vue({
  router,
  store,
  vuetify,
  fb,
  render: function (h) { return h(App) }
}).$mount('#app') 

Vue.use(GoogleAPIs, {
  clientId: '502634347735-p1d05bu1go6irn8mfvnsob606n9olv5u.apps.googleusercontent.com',
  discoveryDocs: ['https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest'],
  scope: 'https://www.googleapis.com/auth/cloud-platform',
})
