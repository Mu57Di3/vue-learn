/**
 * Основной(стартовый) файл приложения
 */

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
            /**
             * Вычисляемое свойство количество сотрудников
             * @returns {number}
             */
            employeesCount: function () {
                return this.employees.length;
            }
        },
        filters: {
            /**
             * Фильтр проверки переменной на наличие и пустоту, возвращает в случае пустой перемернной значение параметра
             * @param value - проверяемое значение
             * @param defValue - значение по умолчанию
             * @returns {*}
             */
            isEmpty: function (value, defValue) {
                return value || defValue
            },

            /**
             * Приводит строку к верхнему регистру
             * @param value - трасформируемая строка
             * @returns {string}
             */
            upperCase: function (value) {
                return String(value).toUpperCase();
            }
        },
        methods: {
            /**
             * Переключает видимость списка пользователей
             */
            toggleEmployeesVisible: function () {
                this.employeesListVisible = !this.employeesListVisible
            },

            /**
             * Колбек успешного копирования значения в буфер обмена
             * @param text
             */
            handleCopy: function (text) {
                console.log("Copy to clipboard ", text)
            }
        }
    });
})();
