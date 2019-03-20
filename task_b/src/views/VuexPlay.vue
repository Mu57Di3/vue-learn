<template>
    <div class="form-group">
        <label>Просто поле для тестов</label> <input v-model="navBatTitle" type="text" class="form-control" />
    </div>
</template>

<script>
export default {
    name: "VuexPlay",
    computed: {
        navBatTitle: {
            get: function() {
                return this.$store.state.navBarTitle;
            },
            set: function(title) {
                this.$store.dispatch("setNavBatTitle", title);
            },
        },
    },
};
</script>

<style scoped></style>
