<template>
    <div class="input-group date">
        <input ref="valueControl" type="text" class="form-control" :value="value" />
        <div class="input-group-append">
            <span class="input-group-text"><i class="far fa-calendar-alt"></i></span>
        </div>
    </div>
</template>

<script>
import FlatPickr from "flatpickr";
import { Russian } from "flatpickr/dist/l10n/ru.js";
import "flatpickr/dist/flatpickr.css";

export default {
    name: "DatePicker",
    props: {
        value: {
            type: String,
            required: true,
        },
    },
    data: function() {
        return {
            dataPickerInstance: null,
        };
    },
    watch: {
        value: "updateDataPicker",
    },
    mounted() {
        this.dataPickerInstance = FlatPickr(this.$refs.valueControl, {
            dateFormat: "d.m.Y",
            locale: Russian,
            onChange: (selectedDates, dateStr) => {
                this.changeHandler(dateStr);
            },
        });
    },
    destroyed() {
        this.dataPickerInstance || this.dataPickerInstance.destroy();
    },
    methods: {
        changeHandler: function(newDate) {
            this.$emit("input", newDate);
        },

        updateDataPicker: function() {
            this.dataPickerInstance || this.dataPickerInstance.setDate(this.value);
        },
    },
};
</script>
