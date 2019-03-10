<template>
    <div class="row">
        <div class="col-md-12"><h1>Создание пользователя</h1></div>
        <div class="col-md-12">
            <div v-if="!userTpl" class="alert alert-warning">Загрузка...</div>
            <user-form
                v-else
                v-bind:user-data="userTpl"
                @save-user="saveHandler"
                @cancel-form="cancelHandler"
            ></user-form>
        </div>
    </div>
</template>

<script>
import UserForm from "../components/UserForm";
import query from "../tools/Query";
import uid from "uid";

export default {
    name: "Add",
    components: {
        UserForm,
    },
    data: function() {
        return {
            userTpl: null,
        };
    },
    mounted() {
        query.get("template").then(response => {
            this.userTpl = response.data;
        });
    },
    methods: {
        saveHandler: function(newUserData) {
            newUserData.id = uid(24);
            query.post("employees", newUserData).then(() => {
                this.$router.push("/");
            });
        },

        cancelHandler: function() {
            this.$router.push("/");
        },
    },
};
</script>

<style scoped></style>
