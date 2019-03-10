<template>
    <div id="app" v-cloak>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <a class="navbar-brand" href="#">VUE-LEARN</a>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                    <router-link tag="li" to="/" exact-active-class="active" class="nav-item">
                        <a class="nav-link">Список пользователей</a>
                    </router-link>
                    <router-link tag="li" to="/add" exact-active-class="active" class="nav-item">
                        <a class="nav-link">Создать пользователя</a>
                    </router-link>
                </ul>
            </div>
        </nav>
        <div class="container"><router-view /></div>
    </div>
</template>

<style>
[v-cloak] {
    display: none;
}
</style>
