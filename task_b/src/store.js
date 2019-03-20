import Vue from "vue";
import Vuex from "vuex";
import { SET_BARTITLE } from "./constants";
import query from "./tools/Query";

Vue.use(Vuex);

const store = new Vuex.Store({
    strict: process.env.NODE_ENV !== "production",
    state: {
        navBarTitle: "VUE-LEARN",
        users: [],
    },
    getters: {
        usersList: state => {
            return state.users;
        },
        userListLength: state => {
            return state.users.length;
        },
    },
    mutations: {
        [SET_BARTITLE]: (state, payload) => {
            state.navBarTitle = payload;
        },
        setUsers: (state, payload) => {
            state.users = payload;
        },
    },
    actions: {
        setNavBatTitle: ({ commit }, title) => {
            commit(SET_BARTITLE, title);
        },
        loadUsers: ({ commit }, options) => {
            query.get("employees", options).then(response => {
                commit("setUsers", response.data);
            });
        },
    },
});

export default store;
