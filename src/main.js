import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyB-KYcoUTgrzHlsN538dKfQYtYV-rU2PLI",
  authDomain: "trabajoencasa-99ea8.firebaseapp.com",
  databaseURL: "https://trabajoencasa-99ea8-default-rtdb.firebaseio.com",
  projectId: "trabajoencasa-99ea8",
  storageBucket: "trabajoencasa-99ea8.appspot.com",
  messagingSenderId: "398243268941",
  appId: "1:398243268941:web:e2217582215eacdf638f04",
};
initializeApp(firebaseConfig);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
