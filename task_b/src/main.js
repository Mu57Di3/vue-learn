import Vue from "vue";
import VeeValidate from "vee-validate";
import App from "./App.vue";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;
Vue.use(VeeValidate, {
    classes: true,
    classNames: {
        valid: "is-valid",
        invalid: "is-invalid",
    },
});

new Vue({
    router,
    store,
    render: h => h(App),
}).$mount("#app");
