import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home";
import Phone from "./views/Phone";
import Test from "./views/VuexPlay";

Vue.use(Router);

export default new Router({
    mode: "history",
    base: process.env.BASE_URL || "./",
    linkActiveClass: "active",
    routes: [
        {
            path: "/",
            name: "home",
            component: Home,
        },
        {
            path: "/add",
            name: "add",
            component: () => import(/* webpackChunkName: "users-add" */ "./views/Add"),
        },
        {
            path: "/edit",
            name: "edit",
            component: () => import(/* webpackChunkName: "users-edit" */ "./views/Edit"),
        },
        {
            path: "/phone",
            name: "phone",
            component: Phone,
        },
        {
            path: "/test",
            name: "test",
            component: Test,
        },
    ],
});
