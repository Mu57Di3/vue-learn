<template>
    <div class="row">
        <div class="col-md-12"><h1>Редактирование пользователя</h1></div>
        <div class="col-md-12">
            <div v-if="!user" class="alert alert-warning">Загрузка...</div>
            <user-form v-else v-model="user"></user-form>
        </div>
        <div class="col-md-12">
            <button type="button" class="btn btn-primary" title="Сохранить" @click="saveHandler">
                <i class="fas fa-check-circle"></i> Сохранить
            </button>
            <button type="button" class="btn btn-light" title="Отмена" @click="cancelHandler">
                <i class="fas fa-times-circle"></i> Отмена
            </button>
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
        saveHandler: function() {
            query.put(`employees/${this.user.id}`, this.user).then(() => {
                this.$router.push("/");
            });
        },

        cancelHandler: function() {
            this.$router.push("/");
        },
    },
};
</script>
