(function() {
    var UserForm = {
        name: "UserForm",
        template: "#user-form",
        props: {
            userData: {
                type: Object,
                default: { name: "", id: 0, position: "" },
            },
        },
        methods: {
            /**
             * Обработчик нажатия кнопки Сохранить
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
                userID: null,
                userData: { name: "", id: 0, position: "" },
                error: false,
            };
        },
        components: {
            "user-form": UserForm,
        },
        /**
         * Событие монитирования
         * парсим урл и загружаем данные нужного сотрудника
         */
        mounted: function() {
            var self = this;
            var uri = new URI(window.location);
            if (uri.hasQuery("id")) {
                uri = uri.search(true);
                axios
                    .get("http://localhost:3000/employees/" + uri.id)
                    .then(function(response) {
                        self.userData = response.data;
                        self.userID = uri.id;
                    })
                    .catch(function(error) {
                        self.error = true;
                    });
            } else {
                this.error = true;
            }
        },
        methods: {
            /**
             * Обновляет данные сотрудника
             * @param newValue
             */
            saveHandler: function(newValue) {
                axios({
                    method: "put",
                    url: "http://localhost:3000/employees/" + this.userID,
                    data: this.userData,
                }).then(function() {
                    window.location.replace("./index.html");
                });
            },
        },
    });
})();
