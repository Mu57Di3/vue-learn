<template>
    <div class="custom-control custom-checkbox">
        <input :id="uniqId" v-model="value" type="checkbox" class="checkbox" />
        <label :for="uniqId">&nbsp;&nbsp;&nbsp;&nbsp;</label>
    </div>
</template>

<script>
import uid from "uid";

export default {
    name: "CustomCheckbox",
    props: {
        value: {
            type: Boolean,
            required: true,
        },
    },
    data: function() {
        return {
            id: uid(4),
        };
    },
    computed: {
        uniqId: function() {
            return `_my_custom_checkbox_${this.id}`;
        },
    },
    watch: {
        value: "changeHandler",
    },
    methods: {
        changeHandler: function() {
            this.$emit("input", this.value);
        },
    },
};
</script>

<style scoped>
.checkbox {
    position: absolute;
    z-index: -1;
    opacity: 0;
    margin: 10px 0 0 20px;
}
.checkbox + label {
    position: relative;
    padding: 0 0 0 60px;
    cursor: pointer;
}
.checkbox + label:before {
    content: "";
    position: absolute;
    top: -4px;
    left: 0;
    width: 50px;
    height: 26px;
    border-radius: 13px;
    background: #cdd1da;
    box-shadow: inset 0 2px 3px rgba(0, 0, 0, 0.2);
    transition: 0.2s;
}
.checkbox + label:after {
    content: "";
    position: absolute;
    top: -2px;
    left: 2px;
    width: 22px;
    height: 22px;
    border-radius: 10px;
    background: #fff;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
    transition: 0.2s;
}
.checkbox:checked + label:before {
    background: #007bff;
}
.checkbox:checked + label:after {
    left: 26px;
}
.checkbox:focus + label:before {
    box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.2), 0 0 0 3px rgba(128, 189, 255, 0.7);
}
</style>
