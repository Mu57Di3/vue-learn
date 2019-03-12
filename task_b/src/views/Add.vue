<template>
    <div class="row">
        <div class="col-md-12"><h1>Создание пользователя</h1></div>
        <div class="col-md-12">
            <div v-if="!userTpl" class="alert alert-warning">Загрузка...</div>
            <user-form v-else v-model="userTpl"></user-form>
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
        saveHandler: function() {
            query.get("employees?_sort=id&_order=desc&_limit=1").then(response => {
                query
                    .post(
                        "employees",
                        Object.assign(this.userTpl, {
                            id: parseInt(response.data[0].id) + 1,
                            picture: `${this.userTpl.picture}${uid(24)}`,
                        })
                    )
                    .then(() => {
                        this.$router.push("/");
                    });
            });
        },

        cancelHandler: function() {
            this.$router.push("/");
        },
    },
};
</script>

<style scoped></style>
