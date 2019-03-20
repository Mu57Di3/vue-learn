<template>
    <div>
        <div class="row">
            <h1><i class="fas fa-users"></i> Список пользователей</h1>
        </div>
        <div class="row">
            <div class="col-md-12">
                <div class="card">
                    <div class="card-header">
                        <span>
                            Пользователей в базе <span class="badge badge-secondary">{{ employeesCount }}</span>
                        </span>
                        <button type="button" class="btn btn-primary float-right  btn-sm">
                            <i class="fas fa-sync-alt"></i>
                        </button>
                    </div>
                    <div class="card-body">
                        <users-list
                            :list="userList"
                            @remove-user="removeHandler"
                            @edit-user="editHandler"
                            @search-user="searchHandler"
                        >
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
    name: "Home",
    components: {
        "users-list": UserList,
    },
    data: function() {
        return {
            search: "",
        };
    },
    computed: {
        employeesCount: function() {
            return this.$store.getters.userListLength;
        },
        userList: function() {
            return this.$store.getters.usersList;
        },
    },
    mounted: function() {
        this.getEmployees();
    },
    methods: {
        removeHandler: function(id) {
            if (confirm("Вы уверены что хотите удалить пользователя?")) {
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
            this.$store.dispatch("loadUsers", options);
        },

        searchHandler: function(search) {
            this.search = search;
            this.getEmployees();
        },
    },
};
</script>
