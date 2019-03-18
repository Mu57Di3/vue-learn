<template>
    <nav v-if="total > size" aria-label="Page navigation example">
        <ul class="pagination">
            <li :class="['page-item', { disabled: current === 0 }]">
                <a class="page-link" href="#" aria-label="Previous" @click.stop="pageChangeHadler(current - 1)">
                    <span aria-hidden="true"><i class="fas fa-angle-double-left"></i></span>
                </a>
            </li>
            <li v-for="page in pageGenerator" :key="page" :class="['page-item', { active: page === current }]">
                <a class="page-link" href="#" @click.stop="pageChangeHadler(page)">
                    {{ page + 1 }} <span v-if="page === current" class="sr-only">(current)</span>
                </a>
            </li>
            <li :class="['page-item', { disabled: current === pagesCount - 1 }]" @click="pageChangeHadler(current + 1)">
                <a class="page-link" href="#" aria-label="Next">
                    <span aria-hidden="true"><i class="fas fa-angle-double-right"></i></span>
                </a>
            </li>
        </ul>
    </nav>
</template>

<script>
import _ from "lodash";

export default {
    name: "PaginationControl",
    model: {
        prop: "current",
        event: "page-changed",
    },
    props: {
        total: {
            type: Number,
            required: true,
        },
        size: {
            type: Number,
            default: 5,
        },
        current: {
            type: Number,
            default: 0,
        },
    },
    computed: {
        pageGenerator: function() {
            return _.range(this.pagesCount);
        },

        pagesCount: function() {
            return Math.ceil(this.total / this.size);
        },
    },
    methods: {
        pageChangeHadler: function(newPage) {
            if (newPage >= 0 && newPage <= this.pagesCount - 1) {
                this.$emit("page-changed", newPage);
            }
        },
    },
};
</script>
