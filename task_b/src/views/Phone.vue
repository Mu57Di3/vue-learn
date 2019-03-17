<template>
    <div>
        <div class="row">
            <h1><i class="fas fa-users"></i> Телефоны</h1>
        </div>
        <div class="row">
            <div class="col-md-12">
                <div class="card">
                    <div class="card-header">
                        <span>
                            Пользователей в базе <span class="badge badge-secondary">{{ employeesCount }}</span>
                        </span>
                    </div>
                    <div class="card-body">
                        <users-list
                            :list="employees"
                            @remove-user="removeHandler"
                            @edit-user="editHandler"
                            @search-user="searchHandler"
                        >
                            <template v-slot:header>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Имя</th>
                                    <th scope="col">Телефон</th>
                                </tr>
                            </template>
                            <template v-slot:list-row="slotProps">
                                <td>{{ slotProps.employee.id }}</td>
                                <td>{{ `${slotProps.employee.name.first} ${slotProps.employee.name.last}` }}</td>
                                <td>{{ slotProps.employee.phone }}</td>
                            </template>
                        </users-list>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import UserList from "../components/UserList";
import query from "../tools/Query";

export default {
    name: "Phone",
    components: {
        "users-list": UserList,
    },
    data: function() {
        return {
            employees: [],
            search: "",
        };
    },
    computed: {
        employeesCount: function() {
            return this.employees.length;
        },
    },
    mounted: function() {
        this.getEmployees();
    },
    methods: {
        removeHandler: function(id) {
            if (confirm("Вы уверенны что хотите удалить пользователя?")) {
                query.delete(`employees/${id}`).then(() => {
                    this.employees = this.employees.filter(item => {
                        return item.id !== id;
                    });
                });
            }
        },

        editHandler: function(id) {
            this.$router.push({ path: "edit", query: { id: id } });
        },

        getEmployees: function() {
            let options = {};
            if (this.search) {
                options["params"] = {
                    "name.last_like": this.search,
                };
            }
            query.get("employees", options).then(response => {
                this.employees = response.data;
            });
        },

        searchHandler: function(search) {
            this.search = search;
            this.getEmployees();
        },
    },
};
</script>
