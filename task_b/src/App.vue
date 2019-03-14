<template>
    <div id="app">
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <router-link to="/" class="navbar-brand" exact>VUE-LEARN</router-link>

            <div id="navbarSupportedContent" class="collapse navbar-collapse">
                <ul class="navbar-nav mr-auto">
                    <router-link tag="li" to="/" exact class="nav-item">
                        <a class="nav-link">Список пользователей</a>
                    </router-link>
                    <router-link tag="li" to="/add" class="nav-item">
                        <a class="nav-link">Создать пользователя</a>
                    </router-link>
                </ul>
            </div>
        </nav>
        <div class="container"><router-view /></div>
    </div>
</template>
