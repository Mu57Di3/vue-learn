<template>
    <div class="form-group">
        <input type="text" class="form-control" v-model="innerValue" placeholder="Поиск...">
    </div>
</template>

<script>
    export default {
        name: "SearchField",
        props: {
            value: {
                type: String
            }
        },
        data: function () {
            return {
                innerValue:""
            }
        },
        mounted() {
            this.innerValue = this.value
        },
        watch: {
            "innerValue": "inputHandler"
        },
        methods:{
            inputHandler: function () {
                this.$emit("input", this.innerValue)
            }
        }
    }
</script>