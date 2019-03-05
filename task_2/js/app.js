(function() {
    var UsersTable = {
        name: "UsersTable",
        template: "#users-list",
        props: {
            list: {
                type: Array,
                required: true
            }
        }
    };

    new Vue({
        el: "#app",
        data: function() {
            return {
                employees: [],
            };
        },
        components: {
            "users-table": UsersTable,
        },
        mounted: function() {
            var self = this;
            axios.get("./db/employees.json").then(function(response) {
                self.employees = response.data;
            });
        },
        computed: {
            employeesCount: function() {
                return this.employees.length;
            },
        },
    });
})();
