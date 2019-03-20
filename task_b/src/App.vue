<template>
    <div id="app">
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <router-link to="/" class="navbar-brand" exact>{{ navBarTitle }}</router-link>

            <div id="navbarSupportedContent" class="collapse navbar-collapse">
                <ul class="navbar-nav mr-auto">
                    <router-link tag="li" to="/" exact class="nav-item">
                        <a class="nav-link">Список пользователей</a>
                    </router-link>
                    <router-link tag="li" to="/add" class="nav-item">
                        <a class="nav-link">Создать пользователя</a>
                    </router-link>
                    <router-link tag="li" to="/phone" class="nav-item">
                        <a class="nav-link">Телефонный справочник</a>
                    </router-link>
                    <router-link tag="li" to="/test" class="nav-item">
                        <a class="nav-link">Vuex</a>
                    </router-link>
                </ul>
            </div>
        </nav>
        <div class="container"><router-view /></div>
    </div>
</template>

<script>
export default {
    name: "App",
    computed: {
        navBarTitle: function() {
            return this.$store.state.navBarTitle;
        },
    },
};
</script>
