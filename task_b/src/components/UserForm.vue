<template>
    <div class="row">
        <div class="col-md-6">
            <div class="form-group">
                <label>Имя</label>
                <input
                    v-model="user['name']['first']"
                    v-validate="'required'"
                    name="first"
                    type="text"
                    class="form-control"
                />
                <span v-if="errors.has('first')" class="invalid-feedback">{{ errors.first("first") }}</span>
            </div>
        </div>
        <div class="col-md-6">
            <div class="form-group">
                <label>Фамилия</label>
                <input
                    v-model="user['name']['last']"
                    v-validate="'required'"
                    name="last"
                    type="text"
                    class="form-control"
                />
                <span v-if="errors.has('last')" class="invalid-feedback">{{ errors.first("last") }}</span>
            </div>
        </div>
        <div class="col-md-6">
            <div class="form-group">
                <label>Возраст</label> <input v-model="user['age']" type="text" class="form-control" />
            </div>
        </div>
        <div class="col-md-6">
            <div class="form-group">
                <label>День рожденья</label>
                <date-picker v-model="user['birthday']"></date-picker>
            </div>
        </div>
        <div class="col-md-12">
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
                <label>e-mail</label>
                <input
                    v-model="user['email']"
                    v-validate="'required|email'"
                    type="email"
                    name="email"
                    class="form-control"
                />
                <span v-if="errors.has('email')" class="invalid-feedback">{{ errors.first("email") }}</span>
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
                <label>Зарегистрированна</label>
                <date-picker v-model="user['registered']"></date-picker>
            </div>
        </div>
        <div class="col-md-6">
            <div class="form-group ">
                <label>Активность</label>
                <custom-checkbox v-model="user['isActive']"></custom-checkbox>
            </div>
        </div>
        <div class="col-md-12">
            <div class="form-group">
                <label>О юзере</label>
                <rich-editor v-model="user['about']"></rich-editor>
            </div>
        </div>
        <pre>
            {{ userData }}
        </pre>
    </div>
</template>

<script>
import _ from "lodash";
import DatePicker from "./DatePicker";
import RichEditor from "./RichEditor";
import CustomCheckbox from "./CustomCheckbox";

export default {
    name: "UserForm",
    components: {
        DatePicker,
        RichEditor,
        CustomCheckbox,
    },
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
    created: function() {
        this.user = this.userData;
    },
    methods: {
        saveHandler: function() {
            if (this.$validator.validate()) {
                this.$emit("save-user", _.cloneDeep(this.user));
            }
        },
    },
};
</script>

<style></style>
