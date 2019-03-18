<template>
    <div>
        <div class="row">
            <div class="col-md-3"><search-field v-model.trim="lastNameFilter"></search-field></div>
        </div>
        <div class="row">
            <div class="col-md-12">
                <table class="table table-striped">
                    <thead class="thead-dark">
                        <slot name="header">
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Фото</th>
                                <th scope="col">Имя</th>
                                <th scope="col">Компания</th>
                                <th scope="col">&nbsp;</th>
                            </tr>
                        </slot>
                    </thead>
                    <tbody>
                        <tr v-for="employee in listPage" :key="employee.id">
                            <slot :employee="employee" name="list-row">
                                <th scope="row">{{ employee.id }}</th>
                                <td>
                                    <img
                                        :src="employee.picture || './img/no-avatar.png'"
                                        class="img-thumbnail rounded mx-auto "
                                    />
                                </td>
                                <td>{{ `${employee.name.first} ${employee.name.last}` }}</td>
                                <td>{{ employee.company }}</td>
                                <td>
                                    <div class="btn-group" role="group" aria-label="Basic example">
                                        <button
                                            type="button"
                                            class="btn btn-link"
                                            title="Редактировать"
                                            @click="editHandler(employee.id)"
                                        >
                                            <i class="fas fa-user-edit"></i>
                                        </button>
                                        <button
                                            type="button"
                                            class="btn btn-link"
                                            title="Удалить"
                                            @click="removeHandler(employee.id)"
                                        >
                                            <i class="fas fa-user-slash"></i>
                                        </button>
                                    </div>
                                </td>
                            </slot>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        <div class="row">
            <div class="col-md-10">
                <pagination v-if="hasPages" v-model="currentPage" :total="listSize" :size="pageSize"></pagination>
            </div>
            <div class="col-md-2"><page-size-control v-if="hasPages" v-model="pageSize"></page-size-control></div>
        </div>
    </div>
</template>

<script>
import Pagination from "./Pagination";
import PageSizeControl from "./PageSizeControl";
import SearchField from "./SearchField";

export default {
    name: "UserList",
    components: {
        Pagination,
        PageSizeControl,
        SearchField,
    },
    props: {
        list: {
            type: Array,
            required: true,
        },
    },
    data: function() {
        return {
            currentPage: 0,
            pageSize: 10,
            lastNameFilter: "",
        };
    },
    computed: {
        listSize: function() {
            return this.list.length || 0;
        },

        listPage: function() {
            return this.list.slice(this.firstIdOfPage, this.firstIdOfPage + this.pageSize) || [];
        },

        firstIdOfPage: function() {
            return this.currentPage * this.pageSize;
        },

        hasPages: function() {
            return this.list.length > this.pageSize;
        },
    },
    watch: {
        lastNameFilter: "searchHandler",
    },
    methods: {
        removeHandler: function(id) {
            this.$emit("remove-user", id);
        },

        editHandler: function(id) {
            this.$emit("edit-user", id);
        },

        searchHandler: function() {
            this.$emit("search-user", this.lastNameFilter);
        },
    },
};
</script>
