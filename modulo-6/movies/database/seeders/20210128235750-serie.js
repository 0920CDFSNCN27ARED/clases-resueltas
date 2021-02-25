"use strict";

module.exports = {
    up: async (queryInterface, Sequelize) => {
        /**
         * Add seed commands here.
         *
         * Example:
         * await queryInterface.bulkInsert('People', [{
         *   name: 'John Doe',
         *   isBetaMember: false
         * }], {});
         */

        await queryInterface.bulkInsert("Serie", [
            {
                title: "Game Of Thrones",
            },
            {
                title: "Firefly",
            },
            {
                title: "Cowboy Bebop",
            },
        ]);
        
        await queryInterface.bulkInsert("Season", [
            {
                title: "Game Of Thrones",
            },
            {
                title: "Firefly",
            },
            {
                title: "Cowboy Bebop",
            },
        ]);
    },

    down: async (queryInterface, Sequelize) => {
        /**
         * Add commands to revert seed here.
         *
         * Example:
         * await queryInterface.bulkDelete('People', null, {});
         */
    },
};
