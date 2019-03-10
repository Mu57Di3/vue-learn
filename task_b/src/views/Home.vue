<template>
    <div>
        <div class="row">
            <h1>
                <i class="fas fa-users"></i> Пользователи
                <span class="badge badge-secondary">{{ employeesCount }}</span>
            </h1>
        </div>
        <div class="row">
            <users-list :list="employees" @remove-user="removeHandler" @edit-user="editHandler"></users-list>
        </div>
    </div>
</template>

<script>
import UserList from "../components/UserList";
import query from "../tools/Query";
import _ from "lodash";

export default {
    name: "home",
    data: function() {
        return {
            employees: [],
        };
    },
    mounted: function() {
        query.get("employees").then(response => {
            this.employees = response.data;
        });
    },
    components: {
        "users-list": UserList,
    },
    computed: {
        employeesCount: function() {
            return this.employees.length;
        },
    },
    methods: {
        removeHandler: function(id) {
            if (confirm("Вы уверенны что хотите удалить пользователя?")) {
                query.delete(`employees/${id}`).then(() => {
                    this.employees = _.reject(this.employees, { id: id });
                });
            }
        },

        editHandler: function(id) {
            this.$router.push({ path: "edit", query: { id: id } });
        },
    },
};
</script>
