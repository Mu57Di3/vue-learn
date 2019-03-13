<template>
    <div class="form-group">
        <select class="form-control form-control-sm" v-model="currentValue">
            <option v-for="(val, index) in list" :key="index">{{ val }}</option>
        </select>
    </div>
</template>

<script>
export default {
    name: "PageSizeControl",
    props: {
        list: {
            type: Array,
            default: function() {
                return [5, 10, 25, 50, 100];
            },
        },
        value: {
            type: Number,
            default: 10,
        },
    },
    data: function() {
        return {
            currentValue: 10,
        };
    },
    mounted: function() {
        this.currentValue = this.value;
    },
    watch: {
        currentValue: "inputHandler",
    },
    methods: {
        inputHandler: function() {
            this.$emit("input", parseInt(this.currentValue));
        },
    },
};
</script>

<style scoped></style>
