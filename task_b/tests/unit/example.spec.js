import { shallowMount } from "@vue/test-utils";
import Pagination from "@/components/Pagination";

describe("Pagination", () => {
    it("calc pages count", () => {
        const wrapper = shallowMount(Pagination, {
            propsData: {
                total: 35,
            },
        });
        expect(wrapper.vm.pagesCount).toEqual(7);
    });

    it("check render control", () => {
        const wrapper = shallowMount(Pagination, {
            propsData: {
                total: 35,
                current: 5,
            },
        });

        expect(wrapper.findAll('li')).toHaveLength(7+2)
    });
});
