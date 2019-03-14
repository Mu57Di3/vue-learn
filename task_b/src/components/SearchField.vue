<template>
    <div class="form-group">
        <input v-model="innerValue" type="text" class="form-control" placeholder="Поиск..." />
    </div>
</template>

<script>
export default {
    name: "SearchField",
    props: {
        value: {
            type: String,
            default: "",
        },
    },
    data: function() {
        return {
            innerValue: "",
        };
    },
    watch: {
        innerValue: "inputHandler",
    },
    mounted() {
        this.innerValue = this.value;
    },
    methods: {
        inputHandler: function() {
            this.$emit("input", this.innerValue);
        },
    },
};
</script>
