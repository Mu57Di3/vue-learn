<template>
    <div class="col-md-12">
        <table class="table">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Фото</th>
                    <th scope="col">Имя</th>
                    <th scope="col">Компания</th>
                    <th scope="col">&nbsp;</th>
                </tr>
            </thead>
            <tbody v-for="(employee, index) in list" v-bind:key="employee.id">
                <tr>
                    <th scope="row">{{ index }}</th>
                    <td>
                        <img
                            v-bind:src="employee.picture || './img/no-avatar.png'"
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
                                @click="removeHandler(employee.id)"
                                title="Удалить"
                            >
                                <i class="fas fa-user-slash"></i>
                            </button>
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
export default {
    name: "UserList",
    props: {
        list: {
            type: Array,
            required: true,
        },
    },
    methods: {
        removeHandler: function(id) {
            this.$emit("remove-user", id);
        },

        editHandler: function(id) {
            this.$emit("edit-user", id);
        },
    },
};
</script>
