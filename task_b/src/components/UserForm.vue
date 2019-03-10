<template>
    <div class="row">
        <div class="col-md-12">
            <div class="form-group">
                <label>Имя</label> <input type="text" class="form-control" v-model="userData['name']['first']" />
            </div>
            <div class="form-group">
                <label>Фамилия</label> <input type="text" class="form-control" v-model="userData['name']['last']" />
            </div>
            <div class="form-group">
                <label>Телефон</label> <input type="text" class="form-control" v-model="userData['phone']" />
            </div>
            <div class="form-group">
                <label>e-mail</label> <input type="email" class="form-control" v-model="userData['email']" />
            </div>
            <div class="form-group">
                <label>Место работы</label> <input type="text" class="form-control" v-model="userData['company']" />
            </div>
        </div>
        <div class="col-md-12">
            <button type="button" class="btn btn-primary" title="Сохранить" @click="saveHandler">
                <i class="fas fa-check-circle"></i>
            </button>
            <button type="button" class="btn btn-light" title="Отмена" @click="cancelHandler">
                <i class="fas fa-times-circle"></i>
            </button>
        </div>
    </div>
</template>

<script>
import _ from "lodash";

export default {
    name: "UserForm",
    props: {
        userData: {
            type: Object,
            required: true,
        },
    },
    methods: {
        saveHandler: function() {
            this.$emit("save-user", _.cloneDeep(this.userData));
        },

        cancelHandler: function() {
            this.$emit("cancel-form");
        },
    },
};
</script>

<style scoped></style>
