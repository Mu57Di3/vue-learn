(function() {
    console.log("-start-");
    new Vue({
        el: "#app",
        data: function() {
            return {
                employeesListVisible: true,
                employees: [
                    {
                        id: 1,
                        name: "Хьюберт Фарнсворт",
                        position: "Директор",
                        image: "./img/prof.jpg"
                    },
                    {
                        id: 2,
                        name: "Гермес Конрад",
                        position: "Бухгалтер",
                    },
                    {
                        id: 3,
                        name: "Лила Туранга",
                        position: "Курьер",
                        image: "./img/lela.jpg"
                    },
                    {
                        id: 4,
                        name: "Филип Джей Фрай",
                        position: "Курьер",
                        image: "./img/fry.jpg"
                    },
                    {
                        id: 5,
                        name: "Бендер Сгибальщик Родригес",
                        position: "Курьер",
                        image: "./img/bender.jpg"
                    },
                ],
            };
        },
        computed:{
            employeesCount: function () {
                return this.employees.length;
            }
        },
        filters: {
            isEmpty: function (value, defValue) {
                return value || defValue
            },
            upperCase: function (value) {
                return String(value).toUpperCase();
            }
        },
        methods: {
            toggleEmployeesVisible: function () {
                this.employeesListVisible = !this.employeesListVisible
            },
            handleCopy: function (text) {
                console.log("Copy to clipboard ", text)
            }
        }
    });
})();
