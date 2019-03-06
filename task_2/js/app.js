(function() {
    window["LIST_MODE"] = 1;
    window["ADD_MODE"] = 3;

    var UsersTable = {
        name: "UsersTable",
        template: "#users-list",
        props: {
            list: {
                type: Array,
                required: true,
            },
        },
    };

    var UserForm = {
        name: "UserForm",
        template: "#user-form",
        props: {
            userData: {
                type: Object,
                default: function() {
                    return { name: "", id: 0, position: "" };
                },
            },
        },
        methods: {
            /**
             * Возврат к списку пользователей
             */
            backHandler: function() {
                this.$emit("back-to-list");
            },

            /**
             * Сохранить пользователя в общий список
             */
            saveHandler: function() {
                this.$emit("user-save", _.cloneDeep(this.userData));
            },
        },
    };

    new Vue({
        el: "#app",
        data: function() {
            return {
                employees: [],
                mode: LIST_MODE,
                userID: null,
                editedIndex: null,
            };
        },
        components: {
            "users-table": UsersTable,
            "user-form": UserForm,
        },
        /**
         * Обработчик монтирования в нем загружаем список сотрудников
         */
        mounted: function() {
            var self = this;
            axios.get("http://localhost:3000/employees").then(function(response) {
                self.employees = response.data;
            });
        },
        computed: {
            /**
             * Количество сотрудников
             * @returns {number}
             */
            employeesCount: function() {
                return this.employees.length;
            },
        },
        methods: {
            /**
             * Включает режим добавления сотрудника
             * @param id
             * @param index
             */
            addHandler: function(id, index) {
                this.mode = ADD_MODE;
            },

            /**
             * Возврат в режим списка
             */
            backHandler: function() {
                this.mode = LIST_MODE;
                this.userID = null;
                this.editedIndex = null;
            },

            /**
             * Добавляем нового пользователя, но без сейва пока
             */
            saveHandler: function(newUser) {
                newUser.id = this.employees.length + 1;
                this.employees.push(newUser);
                this.backHandler();
            },
        },
    });
})();
