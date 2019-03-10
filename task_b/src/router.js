import Vue from "vue";
import Router from "vue-router";
import Edit from "./views/Edit.vue";
import Add from "./views/Add.vue";
import Home from "./views/Home.vue";

Vue.use(Router);

export default new Router({
    mode: "history",
    base: process.env.BASE_URL,
    routes: [
        {
            path: "/",
            name: "home",
            component: Home,
        },
        {
            path: "/add",
            name: "add",
            component: Add,
        },
        {
            path: "/edit",
            name: "edit",
            component: Edit,
        },
    ],
});
