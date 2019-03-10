<template>
    <div class="row">
        <div class="col-md-12"><h1>Редактирование пользователя</h1></div>
        <div class="col-md-12">
            <div v-if="!user" class="alert alert-warning">Загрузка...</div>
            <user-form v-else v-bind:user-data="user" @save-user="saveHandler" @cancel-form="cancelHandler"></user-form>
        </div>
    </div>
</template>

<script>
import UserForm from "../components/UserForm";
import query from "../tools/Query";

export default {
    name: "edit",
    components: {
        UserForm,
    },
    data: function() {
        return {
            user: null,
        };
    },
    mounted: function() {
        query.get(`employees/${this.$route.query.id}`).then(response => {
            this.user = response.data;
        });
    },
    methods: {
        saveHandler: function(newUserData) {
            query.put(`employees/${newUserData.id}`, newUserData).then(() => {
                this.$router.push("/");
            });
        },

        cancelHandler: function() {
            this.$router.push("/");
        },
    },
};
</script>
