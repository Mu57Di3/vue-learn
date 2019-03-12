<template>
    <div class="row">
        <div class="col-md-6">
            <div class="form-group">
                <label>Имя</label> <input type="text" class="form-control" v-model="user['name']['first']" />
            </div>
        </div>
        <div class="col-md-6">
            <div class="form-group">
                <label>Фамилия</label> <input type="text" class="form-control" v-model="user['name']['last']" />
            </div>
        </div>
        <div class="col-md-6">
            <div class="form-group">
                <label>Возраст</label> <input type="text" class="form-control" v-model="user['age']" />
            </div>
        </div>
        <div class="col-md-6">
            <div class="form-group">
                <label>Цвет глаз</label>
                <select class="form-control" v-model="user['eyeColor']">
                    <option value="blue">Голубые</option>
                    <option value="brown">Карие</option>
                    <option value="green">Зеленые</option>
                </select>
            </div>
        </div>
        <div class="col-md-6">
            <div class="form-group">
                <label>Телефон</label> <input type="text" class="form-control" v-model="user['phone']" />
            </div>
        </div>
        <div class="col-md-6">
            <div class="form-group">
                <label>e-mail</label> <input type="email" class="form-control" v-model="user['email']" />
            </div>
        </div>
        <div class="col-md-12">
            <div class="form-group">
                <label>Фото</label> <input type="text" class="form-control" v-model="user['picture']" />
            </div>
            <div class="form-group">
                <label>Адресс</label> <input type="text" class="form-control" v-model="user['address']" />
            </div>
            <div class="form-group">
                <label>Место работы</label> <input type="text" class="form-control" v-model="user['company']" />
            </div>
            <div class="form-group">
                <label>Баланс</label> <input type="text" class="form-control" v-model="user['balance']" />
            </div>
        </div>
        <div class="col-md-6">
            <div class="form-group">
                <label>Зарегистрированна</label> <input type="text" class="form-control" v-model="user['registered']" />
            </div>
        </div>
        <div class="col-md-6">
            <div class="form-group">
                <br />
                <div class="form-check form-check-inline">
                    <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        id="defaultCheck1"
                        v-model="user['isActive']"
                    />
                    <label class="form-check-label" for="defaultCheck1"> Активность </label>
                </div>
            </div>
        </div>
        <div class="col-md-12">
            <div class="form-group">
                <label>О юзере</label> <textarea class="form-control" rows="3" v-model="user['about']"></textarea>
            </div>
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
    model: {
        prop: "userData",
        event: "save-user",
    },
    data: function() {
        return {
            user: { name: {} },
        };
    },
    watch: {
        user: {
            handler: "saveHandler",
            deep: true,
        },
    },
    mounted: function() {
        this.user = this.userData;
    },
    methods: {
        saveHandler: function() {
            this.$emit("save-user", _.cloneDeep(this.user));
        },
    },
};
</script>

<style scoped></style>
