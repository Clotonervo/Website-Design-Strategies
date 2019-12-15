import Vue from 'vue';
import firebase from 'firebase';
import App from './App.vue';
import router from './router';

Vue.config.productionTip = false;

let app = '';
const config = {
    apiKey: "AIzaSyB_6phZt-umqPsEdLNVJJyCOAQKwqDFhcA",
    authDomain: "vue-firebase-tutorial-d16c8.firebaseapp.com",
    databaseURL: "https://vue-firebase-tutorial-d16c8.firebaseio.com",
    projectId: "vue-firebase-tutorial-d16c8",
    storageBucket: "vue-firebase-tutorial-d16c8.appspot.com",
    messagingSenderId: "819947527994",
    appId: "1:819947527994:web:2c8567c841fa88e37e3a03"
};

firebase.initializeApp(config);


firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    /* eslint-disable no-new */
    app = new Vue({
      router,
      render: h => h(App)
    }).$mount('#app');
  }
});

