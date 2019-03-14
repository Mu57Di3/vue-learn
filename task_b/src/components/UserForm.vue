<template>
    <div class="row">
        <div class="col-md-6">
            <div class="form-group">
                <label>Имя</label> <input v-model="user['name']['first']" type="text" class="form-control" />
            </div>
        </div>
        <div class="col-md-6">
            <div class="form-group">
                <label>Фамилия</label> <input v-model="user['name']['last']" type="text" class="form-control" />
            </div>
        </div>
        <div class="col-md-6">
            <div class="form-group">
                <label>Возраст</label> <input v-model="user['age']" type="text" class="form-control" />
            </div>
        </div>
        <div class="col-md-6">
            <div class="form-group">
                <label>Цвет глаз</label>
                <select v-model="user['eyeColor']" class="form-control">
                    <option value="blue">Голубые</option>
                    <option value="brown">Карие</option>
                    <option value="green">Зеленые</option>
                </select>
            </div>
        </div>
        <div class="col-md-6">
            <div class="form-group">
                <label>Телефон</label> <input v-model="user['phone']" type="text" class="form-control" />
            </div>
        </div>
        <div class="col-md-6">
            <div class="form-group">
                <label>e-mail</label> <input v-model="user['email']" type="email" class="form-control" />
            </div>
        </div>
        <div class="col-md-12">
            <div class="form-group">
                <label>Фото</label> <input v-model="user['picture']" type="text" class="form-control" />
            </div>
            <div class="form-group">
                <label>Адресс</label> <input v-model="user['address']" type="text" class="form-control" />
            </div>
            <div class="form-group">
                <label>Место работы</label> <input v-model="user['company']" type="text" class="form-control" />
            </div>
            <div class="form-group">
                <label>Баланс</label> <input v-model="user['balance']" type="text" class="form-control" />
            </div>
        </div>
        <div class="col-md-6">
            <div class="form-group">
                <label>Зарегистрированна</label> <input v-model="user['registered']" type="text" class="form-control" />
            </div>
        </div>
        <div class="col-md-6">
            <div class="form-group">
                <br />
                <div class="form-check form-check-inline">
                    <input
                        id="defaultCheck1"
                        v-model="user['isActive']"
                        class="form-check-input"
                        type="checkbox"
                        value=""
                    />
                    <label class="form-check-label" for="defaultCheck1"> Активность </label>
                </div>
            </div>
        </div>
        <div class="col-md-12">
            <div class="form-group">
                <label>О юзере</label> <textarea v-model="user['about']" class="form-control" rows="3"></textarea>
            </div>
        </div>
    </div>
</template>

<script>
import _ from "lodash";

export default {
    name: "UserForm",
    model: {
        prop: "userData",
        event: "save-user",
    },
    props: {
        userData: {
            type: Object,
            required: true,
        },
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
