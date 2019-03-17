<template>
    <textarea ref="editor" :value="value" class="form-control"></textarea>
</template>

<script>
import tinymce from "tinymce/tinymce";
import "tinymce/themes/silver/theme";
import "tinymce/skins/ui/oxide/skin.css";
import "tinymce/skins/ui/oxide/content.css";

export default {
    name: "RichEditor",
    props: {
        value: {
            type: String,
            required: true,
        },
    },
    watch: {
        value: "updateContent",
    },
    mounted() {
        this.createEditor();
    },
    destroyed() {
        tinymce.remove(tinymce.activeEditor);
    },
    methods: {
        createEditor: function() {
            const self = this;
            tinymce.init({
                target: this.$refs.editor,
                skin: false,
                menubar: false,
                init_instance_callback: function(editor) {
                    editor.on("Change", function() {
                        self.changeHandler(editor.getContent());
                    });
                },
            });
        },

        changeHandler: function(content) {
            this.$emit("input", content);
        },

        updateContent: function() {
            tinymce.activeEditor.setContent(this.value);
        },
    },
};
</script>
